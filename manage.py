#!/usr/bin/env python
# coding: utf-8
"""
Funzioni utili per la gestione del server
da riga di comando
"""

from flask.ext.script import Manager
from teapot import app

manager = Manager(app)


@manager.command
def info():
    """
    """
    for c in app.config:
        print "{}=={}".format(c, app.config[c])


@manager.command
def prova():
    from teapot.boris.documents import get_doc
    url = 'http://www.dlib.org/dlib/november14/beel/11beel.html'
    get_doc(url)


if __name__ == "__main__":
    manager.run()
