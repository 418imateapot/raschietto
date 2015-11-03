#!/usr/bin/env python
# coding: utf-8
import os, sys

binpath = os.path.dirname(os.path.realpath(__file__))

activate_this = os.path.join(binpath, 'env/bin/activate_this.py')
execfile(activate_this, dict(__file__=activate_this))

sys.path.insert(0, binpath)
from teapot import app as application
