#!/usr/bin/env bash
# Tested on Ubuntu Desktop 16.04

#########
# Setup #
#########

# Requires java and yui-compressor
# https://github.com/yui/yuicompressor/downloads
#
# Consider adding a sym link to the ui-compressor if it's not already 
# setup in /usr/bin/. Something like the following should work:
#
# For Ubuntu:
#
# >>> sudo ln -s /home/<myUser>/source/yuicompressor-2.4.7 /usr/bin/yuicompressor
#
# -- OR --
#
# Modify this file to point to your yuicompressor's jar file:

yui='/usr/bin/yuicompressor/build/yuicompressor-2.4.7.jar'
java='/usr/bin/java'

# Requires nodejs, npm, grunt, and grunt-uncss, grunt-replace, grunt-sitemap, grunt-contrib-cssmin
# For Ubuntu:
# >>> sudo apt-get install nodejs
# >>> sudo apt-get install npm
# >>> npm install -g grunt-cli
# >>> npm install grunt-uncss --save-dev
# >>> npm install grunt-replace --save-dev
# >>> npm install grunt-sitemap --save-dev
# >>> npm install grunt-contrib-cssmin --save-dev


###############################
# initilize deployment folder #
###############################
rm -r deploy
mkdir -p deploy/js
mkdir -p deploy/css
mkdir -p deploy/img
cp src/index.html deploy/index.html
cp -r src/img/* deploy/img/

###################
# JS Minification #
###################

# Must have. Do not remove.
$java -jar $yui src/js/present.js -o src/js/present.min.js
$java -jar $yui src/js/index.js   -o src/js/index.min.js

cat src/js/jquery.min.js        > deploy/js/deploy.min.js
echo $'\n\n'                   >> deploy/js/deploy.min.js
cat src/js/bootstrap.min.js    >> deploy/js/deploy.min.js

####################
# Grunt Automation #
####################

grunt

##############
# Publishing #
##############

cp deploy/index.html index.html
cp deploy/services.html services.html
