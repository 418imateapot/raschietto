#!/usr/bin/env python
# coding: utf-8
from flask.ext.script import Manager
from teapot import app

manager = Manager(app)


@manager.command
def info():
    for c in app.config:
        print "{}=={}".format(c, app.config[c])


@manager.command
def prova():
    from teapot.boris.getDoc import getDoc
    url = 'http://www.dlib.org/dlib/november14/beel/11beel.html';
    getDoc(url)


if __name__ == "__main__":
    manager.run()
