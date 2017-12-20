#!/bin/bash

ng build
scp -r ./dist/. sbengtson@bengtson.ca:/var/www/html/
