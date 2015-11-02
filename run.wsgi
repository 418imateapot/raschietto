#!/usr/bin/env python
# coding: utf-8

THIS_DIR = 'REPO DIR HERE!'

import os, sys
sys.path.insert(0, os.path.join(os.getcwd(), THIS_DIR))
from teapot import app as application

# config
DEBUG=True
# STATIC_FOLDER=os.path.join(os.getcwd(), 'static')

if __name__ == "__main__":
    application.run(debug=DEBUG)
