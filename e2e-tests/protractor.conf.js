//jshint strict: false

exports.config = {

  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    '**/*_test.js'
  ],

  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
