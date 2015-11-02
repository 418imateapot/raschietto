#!/usr/bin/env python
# coding: utf-8
import os
from flask import Flask

app = Flask(__name__)
app.config.from_object("__main__")

import routes

if __name__ == "__main__":
    app.run()
