#!/usr/bin/env python2
# coding: utf-8
from os import path, getcwd, chdir, fork, execv, waitpid

def checkDir():
    repo_dir = path.dirname(path.realpath(__file__))
    curr_dir = getcwd()
    if curr_dir != repo_dir:
        chdir(repo_dir)
        print "cd into {}".format(repo_dir)

def makeVirtualenv(name='env'):
    print "Settimg up Virtual env"
    pid = fork()
    if pid == 0:
        execv('/usr/local/bin/virtualenv', ('virtualenv', name)) 
    else:
        return pid

def main():
    checkDir()
    venv_pid = makeVirtualenv('env')
    waitpid(venv_pid ,0)


if __name__ == "__main__":
    main()
