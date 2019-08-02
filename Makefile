default: test
.PHONY: default

install_prerequisites:
	npm install
.PHONY: install_prerequisites

generate_tests:
	hiptest-publisher -c protractor.conf -t "$(SECRET_TOKEN)" --without=actionwords
.PHONY: generate_tests

test: install_prerequisites
	(npm start > /dev/null &) && (npm run protractor)
.PHONY: test
