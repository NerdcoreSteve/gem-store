#!/bin/bash
browserify front-end/js/main.js -o public/js/main.js -t [ babelify --presets [ es2015 ] ];
gulp;
