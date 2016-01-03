# coding: utf-8
"""
Funzioni utili per recuperare i documenti dai server remoti
"""

from lxml import html, etree
import httplib
import urlparse
import json


def fix_links(content, absolute_prefix):
    """
    Rewrite relative links to be absolute links based on certain URL.
    Courtesy of
    https://stackoverflow.com/questions/26167690/
    lxml-how-to-change-img-src-to-absolute-link

    @param content: HTML object
    """
    def join(base, url):
        """
        Join relative URL
        """
        if not (url.startswith("/") or "://" in url):
            return urlparse.urljoin(base, url)
        else:
            # Already absolute
            return url

    for node in content.xpath('//*[@src]'):
        url = node.get('src')
        url = join(absolute_prefix, url)
        node.set('src', url)
    for node in content.xpath('//*[@href]'):
        href = node.get('href')
        url = join(absolute_prefix, href)
        node.set('href', url)

    return content


def removeFileName(url_string):
    """ Rimuove l'ultimo segmento da un URL """
    components = url_string.split('/')
    components.pop(-1)
    return '/'.join(components)


def dlib_get(url_string):
    url = urlparse.urlparse(url_string)
    conn = httplib.HTTPConnection(url.hostname)
    conn.request("GET", url.path)
    res = conn.getresponse()
    body = res.read()

    my_page = html.fromstring(body)

    title = my_page.xpath('//h3[@class="blue-space"][2]')
    full_content = my_page.xpath('//table[3]//table[5]//table[1]//td[2]/*')
    doi = my_page.xpath('/html/head/meta[@name="DOI"]/@content')

    full_content = ''.join(
        [etree.tostring(fix_links(el, url_string)) for el in full_content])

    result = {
        'title': title[0].text_content(),
        'content': full_content,
        'doi': doi[0]
        }

    return json.JSONEncoder().encode(result)


def get_doc(url_string):
    if "dlib.org" in url_string:
        return dlib_get(url_string)
    else:
        return "<h1>NOPE</h1>"
