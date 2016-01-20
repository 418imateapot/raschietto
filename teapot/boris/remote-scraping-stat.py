# -*- coding: utf-8 -*-

#
# NOTE: install httplib, lxml or use other modules
#

from lxml import html
import httplib, json

conn = httplib.HTTPConnection("rivista-statistica.unibo.it")
conn.request("GET","/article/view/5473")
res = conn.getresponse()
body = res.read()

my_data = []
my_page = html.fromstring(body)

for row in my_page.xpath("/html"):
    first_cell = row.xpath("//meta[@name='description']/@content")[0].encode("utf8")
    second_cell = row.xpath("//meta[@name='DC.Identifier.DOI']/@content")[0].encode("utf8")
    third_cell = row.xpath("//div[@id='authorString']")[0].text_content().encode("utf8")
    fourth_cell = row.xpath("//meta[@name='DC.Date.created']/@content")[0].encode("utf8")

    my_row = 'title: ', first_cell, 'doi :',second_cell, 'Author: ', third_cell, 'data: ',fourth_cell
    my_data += my_row

for p in my_data:
	print
	print p

with open('my_row-stat.json', 'w') as f:
   json.dump(my_data, f)
