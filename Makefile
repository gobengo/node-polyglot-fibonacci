.PHONY: default build clean clean-deps

NODE?=node

default: compare

compare: build
	$(NODE) bin/compare.js

build: node_modules

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf build

clean-deps:
	rm -rf node_modules
