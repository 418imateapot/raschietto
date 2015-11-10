#!/usr/bin/env python2
# coding: utf-8

import os, sys
from os import path, fork, execv, waitpid

REPO_DIR = path.dirname(path.realpath(__file__))
CURRENT_DIR= os.getcwd()
VIRTUALENV_NAME = 'env'
REQ_FILE = path.join(path.dirname(path.realpath(__file__)), 'requirements.txt')

def which(program):
    """ Finds the path of the executable for a given command """
    def is_exe(fpath):
        return os.path.isfile(fpath) and os.access(fpath, os.X_OK)

    fpath, fname = os.path.split(program)
    if fpath:
        if is_exe(program):
            return program
    else:
        for path in os.environ["PATH"].split(os.pathsep):
            path = path.strip('"')
            exe_file = os.path.join(path, program)
            if is_exe(exe_file):
                return exe_file
    return None


def checkDir():
    """ Checks that we are in the correct directory """
    if CURRENT_DIR != REPO_DIR:
        os.chdir(REPO_DIR)
        print "cd into {}".format(REPO_DIR)


def makeVirtualenv(name=VIRTUALENV_NAME):
    """ Creates a default virtualenv """
    print "=================================="
    print "Setting up the virtual environment"
    print "=================================="
    VIRTUALENV_NAME = name
    pid = fork()
    if pid == 0:
        virtualenv_executable = which('virtualenv')
        execv(virtualenv_executable, ('virtualenv', name)) 
    else:
        status = waitpid(pid, 0)
        if status[1] != 0:
            print "ERROR! pip exited with status {}".format(status)
            sys.exit(1)


def installPyLibs(requirements_file=REQ_FILE):
    """ Installs all required libraries in the virtualenv """
    print "===================================="
    print "Installing required python libraries"
    print "===================================="
    pid = fork()
    if pid == 0:
        pip_executable = path.join(REPO_DIR, VIRTUALENV_NAME,'bin/pip')
        execv(pip_executable,
              ('pip', 'install', '-r',  requirements_file))
    else:
        status = waitpid(pid, 0)
        if status[1] != 0:
            print "ERROR! pip exited with status {}".format(status)
            sys.exit(1)


def setupNodeDeps():
    """ Runs npm install in the static directory """
    pid = fork()
    if pid == 0:
        print "==========================="
        print "Installing npm dependencies"
        print "==========================="
        os.chdir('static')
        npm_path = which('npm')
        execv(npm_path, ('npm', 'i'))
    else:
        status = waitpid(pid, 0)
        if status[1] != 0:
            print "ERROR! npm exited with status {}".format(status)
            sys.exit(1)


def buildStaticFiles():
    """ Runs gulp to build the static files """
    pid = fork()
    if pid == 0:
        print "==================="
        print "Starting gulp build"
        print "==================="
        os.chdir('static')
        gulp_path = which('gulp')
        execv(gulp_path, ('gulp',))
    else:
        status = waitpid(pid, 0)
        if status[1] != 0:
            print "ERROR! gulp exited with status {}".format(status)
            sys.exit(1)


##################################################
def main():
    checkDir()
    makeVirtualenv('env')
    installPyLibs(REQ_FILE)
    setupNodeDeps()
    buildStaticFiles()


if __name__ == "__main__":
    main()
