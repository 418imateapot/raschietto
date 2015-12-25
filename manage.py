#!/usr/bin/env python
# coding: utf-8
"""
Funzioni utili per la gestione del server
da riga di comando
"""


# Attiva l'ambiente virtuale python
from os import path
binpath = path.dirname(path.realpath(__file__))
activate_this = path.join(binpath, 'env/bin/activate_this.py')
execfile(activate_this, dict(__file__=activate_this))


from flask.ext.script import Manager
from teapot import app
from appManager import commands


manager = Manager(app)


def printFuncOutput(func, *args, **kwargs):
    for line in func(*args, **kwargs):
        print line


@manager.command
def info():
    """
    Print a list of environment variables for the flask app
    """
    for c in app.config:
        print "{}=={}".format(c, app.config[c])


@manager.command
def prova():
    from teapot.boris.documents import get_doc
    url = 'http://www.dlib.org/dlib/november14/beel/11beel.html'
    get_doc(url)


@manager.command
def setup(target="all"):
    """
    Install and configure stuff needed for the app to work
    """
    fun = None
    if target == "js":
        print "no output available. But it's working, I swear"
        fun = commands.setupNodeDeps
    elif target == "py":
        fun = commands.setupPyDeps
    else:
        from appManager.setup import setup
        fun = setup
    printFuncOutput(fun)


@manager.command
def build():
    """
    Compile the static files of the webapp
    """
    printFuncOutput(commands.buildStaticFiles, False)


@manager.command
def watch():
    """
    Compile the static files and watch for changes
    """
    printFuncOutput(commands.buildStaticFiles, True)


@manager.command
def apacheConf():
    """
    Generate a decent (but probably dangerous) apache configuration.
    """
    printFuncOutput(commands.setupApacheStuff)


@manager.command
def gui():
    """
    Start the GUI version of raschietto manager
    """
    from appManager.manager_gui import vp_start_gui
    vp_start_gui()


if __name__ == "__main__":
    manager.run()
