#!/usr/bin/env python2
# coding: utf-8
from os import path, getcwd, chdir, fork, execv, waitpid

REQ_FILE = path.join(path.dirname(path.realpath(__file__)), 'requirements.txt')
PYTHON_LIBS = ['flask', 'flask-script', 'rdflib', 'SPARQLWrapper', 'scrapy']
REPO_DIR = path.dirname(path.realpath(__file__))

def checkDir():
    """ Checks that we are in the correct directory """
    repo_dir = REPO_DIR
    curr_dir = getcwd()
    if curr_dir != repo_dir:
        chdir(repo_dir)
        print "cd into {}".format(repo_dir)

def makeVirtualenv(name='env'):
    """ Creates a default virtualenv """
    print "Setting up Virtual env"
    pid = fork()
    if pid == 0:
        execv('/usr/local/bin/virtualenv', ('virtualenv', name)) 
    else:
        return pid

def installPyLibs(requirements_file=REQ_FILE):
    """ Installs all required libraries in the virtualenv """
    print "======================================"
    print "Installing required python libraries"
    print "======================================"
    pid = fork()
    if pid == 0:
        pip_executable = path.join(REPO_DIR, 'env/bin/pip')
        execv(pip_executable,
                ('pip', 'install', '-r',  requirements_file))
    else:
        waitpid(pid, 0)

#======================================
def main():
    checkDir()
    venv_pid = makeVirtualenv('env')
    waitpid(venv_pid ,0)
    installPyLibs(REQ_FILE)


if __name__ == "__main__":
    main()
