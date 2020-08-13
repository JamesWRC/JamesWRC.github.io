#!/bin/bash
rootURL="https://jameswrc.github.io/"
keyWord="assets/"
dir="/Users/james/Documents/GitHub/Sites/JamesWRC.github.io/"
sed -i -e 's,'"${keyWord}"','"${rootURL}${keyWord}"',g' "${dir}index.html"
