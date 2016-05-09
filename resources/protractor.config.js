exports.config = {
    seleniumServerJar: '../node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.47.1.jar',
    chromeDriver: '../node_modules/gulp-protractor/node_modules/protractor/selenium/chromedriver',
    capabilities: {browserName: 'chrome'},
    cucumberOpts: {
        require: 'cucumber/stepDefinitions.js',
        tags: '@dev',
        format: 'summary'
    },
    framework: 'jasmine2',
    onPrepare: function() {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'coverage',
            filePrefix: 'protractor'
        }));
    }
};