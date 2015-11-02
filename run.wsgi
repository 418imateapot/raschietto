#!/usr/bin/env python
# coding: utf-8

THIS_DIR = 'REPO DIR HERE!'

import os, sys
<<<<<<< HEAD
sys.path.insert(0, os.path.join(os.getcwd(), THIS_DIR))
=======
sys.path.insert(0, os.path.join(os.getcwd(), '/home/edusan/newTea'))
>>>>>>> f1e105e778fa08fba6778640268896a1c75bec24
from teapot import app as application

# config
DEBUG=True
# STATIC_FOLDER=os.path.join(os.getcwd(), 'static')

if __name__ == "__main__":
    application.run(debug=DEBUG)
