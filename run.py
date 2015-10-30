#!/usr/bin/env python
# coding: utf-8
import os
from teapot import app

# config
DEBUG=True
STATIC_FOLDER=os.path.join(os.getcwd(), 'static')

if __name__ == "__main__":
    app.run(debug=DEBUG)
