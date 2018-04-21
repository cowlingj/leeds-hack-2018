#!/usr/bin/env bash

zip -j dist/out.zip package.json dist/out.js
zip -ur dist/out.zip ./node_modules

echo "zipped files:"
unzip -l dist/out.zip