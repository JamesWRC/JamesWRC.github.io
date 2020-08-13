#!/bin/bash
rootURL="https://jameswrc.github.io/"
keyWord="assets/"
sed -i -e 's,'"${keyWord}"','"${rootURL}${keyWord}"',g' index.html
