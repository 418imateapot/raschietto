#!/usr/bin/env python
# coding: utf-8
import os
from flask import Flask

app = Flask(__name__)               # Crea l'applicazione Flask
app.config.from_object("__main__")  # Serve ancora a qualcosa? boh!
app.debug=True                      # TODO: disattivare per la consegna

import routes

if __name__ == "__main__":
    app.run()
