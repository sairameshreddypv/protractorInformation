// An example configuration file.
exports.config = {
  // directConnect: true,
  
   // SELENIUM_PROMISE_MANAGER: false,

  capabilities: {
        'browserName': 'internet explorer',
        'ignoreProtectedModeSettings': true,
		'platform': 'ANY',
        'version': '11',  
			
			args: ['--silent', '--no-sandbox', '--test-type=browser', '--lang=US', '--start-maximized'], //,'--headless', '--disable-gpu'
        prefs: {
            'download': {
                'prompt_for_download': false,
                'directory_upgrade': true,
                'extensions_to_open': '',
                'default_directory': process.cwd() + '/downloads/'
            },
        }		
    },
	
    localSeleniumStandaloneOpts: {
        jvmArgs: [
            '-Dwebdriver.ie.driver="node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.150.0.exe"'
        ]
    },
     // directConnect: false,
    framework: 'jasmine',
    seleniumArgs: ['-Dwebdriver.ie.driver="node_modules/protractor/node_modules/webdriver-manager/selenium/IEDriverServer3.150.0.exe"'],

    seleniumAddress: 'http://localhost:4444/wd/hub',
  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['example_spec.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
