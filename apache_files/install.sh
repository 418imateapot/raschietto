#!/usr/bin/env sh

cp "010-raschietto.conf" "/etc/apache2/sites-available"
a2ensite "010-raschietto"
apache2ctl restart
