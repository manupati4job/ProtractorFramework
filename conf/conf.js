// An example configuration file.

 //*********************************************************************************************************************
  //Screenshot related code from - https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter
  //*********************************************************************************************************************

 //*********************************************************************************************************************
  //Config related
  //*********************************************************************************************************************
exports.config = {
  directConnect: true,
  //useAllAngular2AppRoots: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  //*********************************************************************************************************************
  //Screenshot related code from - https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter
  //*********************************************************************************************************************


};
