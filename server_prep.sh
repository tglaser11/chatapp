#!/bin/sh

# source ./set_env.sh $1

source ./set_env.sh dev
./node_modules/.bin/grunt

node app.js