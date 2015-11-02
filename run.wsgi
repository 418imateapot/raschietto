#!/usr/bin/env python
# coding: utf-8
import os, sys
sys.path.insert(0, os.path.join(os.getcwd(), '/home/edusan/newTea'))
from teapot import app as application

# config
DEBUG=True
# STATIC_FOLDER=os.path.join(os.getcwd(), 'static')

if __name__ == "__main__":
    application.run(debug=DEBUG)
