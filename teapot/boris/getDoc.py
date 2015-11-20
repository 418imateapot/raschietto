# coding: utf-8

from lxml import html, etree
import httplib
import urlparse
import json

def getDoc(url_string):
    url = urlparse.urlparse(url_string)
    conn = httplib.HTTPConnection(url.hostname)
    conn.request("GET", url.path)
    res = conn.getresponse()
    body = res.read()

    my_page = html.fromstring(body)

    title = my_page.xpath('//h3[@class="blue-space"][2]')
    full_content = my_page.xpath('//table[3]//table[5]//table[1]//td[2]')
    result = {'title': title[0].text_content(), 'content': etree.tostring(full_content[0])}

    return json.JSONEncoder().encode(result)
