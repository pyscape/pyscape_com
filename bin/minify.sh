#!/usr/bin/env bash

#########
# Setup #
#########

# Requires java and yui-compressor
# https://github.com/yui/yuicompressor/downloads
#
# Consider adding a sym link to the ui-compressor if it's not already 
# setup in /usr/bin/. Something like the following should work:
# >>> sudo ln -s /home/myUser/source/yuicompressor-2.4.7 /usr/bin/yuicompressor
# Or modify this file to point to your yuicompressor

yui='/usr/bin/yuicompressor/build/yuicompressor-2.4.7.jar'
java='/usr/bin/java'

# Requires nodejs, npm, grunt, and grunt-uncss
# >>> sudo apt-get install nodejs
# >>> sudo apt-get install npm
# >>> sudo npm install -g grunt-cli
# >>> sudo npm install grunt-uncss --save-dev

###################
# JS Minification #
###################

# Must have. Do not remove.
cat js/jquery.min.js > js/deploy.min.js
echo $'\n' >> js/deploy.min.js
cat js/bootstrap.min.js >> js/deploy.min.js
echo $'\n' >> js/deploy.min.js

# Optional
cat js/owl.carousel.min.js >> js/deploy.min.js
echo $'\n' >> js/deploy.min.js
cat js/index.js >> js/deploy.min.js

####################
# CSS minification #
####################

# Must have. Do not remove.


$java -jar $yui css/theme.css -o css/theme.min.css
$java -jar $yui css/animate.css -o css/animate.min.css

cat css/theme.min.css > css/style.min.css
echo $'\n' >> css/style.min.css
cat css/animate.min.css >> css/style.min.css
