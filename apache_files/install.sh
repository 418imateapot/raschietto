#!/usr/bin/env bash

conf_dir=$(dirname $(readlink -f $0))
cd $conf_dir

# copy conf file
# Listen on port 8080
# enable site
# restart apache
cp "010-raschietto.conf" "/etc/apache2/sites-available" \
&& sed -i '$ i\Listen 8080\n' /etc/apache2/ports.conf \
&& a2ensite "010-raschietto" \
&& apache2ctl restart

