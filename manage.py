#!/usr/bin/env python
# coding: utf-8
from flask.ext.script import Manager
from teapot import app

manager = Manager(app)

@manager.command
def info():
    for c in app.config:
        print "{}=={}".format(c, app.config[c])

if __name__ == "__main__":
    manager.run()
