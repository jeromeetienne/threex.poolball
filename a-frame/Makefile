.PHONY: build

build:
	cat ../threex.poolball.js ./*.js > build/aframe-poolball.js 

minify: build
	uglifyjs build/aframe-poolball.js > build/aframe-poolball.min.js
