#!/usr/bin/env python
# coding: utf-8
import os
from flask import Flask

STATIC_FOLDER = os.path.join(os.getcwd(), "static")

app = Flask(__name__, static_folder=STATIC_FOLDER)
app.config.from_object("__main__")

import routes

if __name__ == "__main__":
    app.run()
