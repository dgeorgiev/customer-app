module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        autoWatch: true,
        usePolling: true,
        'atomic_save': false,
        files: [
            'bower_components/angular/angular.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-sanitize/angular-sanitize.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/angular-aria/angular-aria.js',
            'bower_components/angular-material/angular-material.js',
            'bower_components/angular-material-icons/angular-material-icons.min.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'resources/directive-builder.js',
            'app/**/*.module.js',
            'app/**/*.directive.js',
            'app/**/*.html',
            'app/**/*.js',
            'app/*.js',
        ],
        plugins: [
            'karma-ng-html2js-preprocessor',
            'karma-ng-json2js-preprocessor',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage',
            'karma-junit-reporter'
        ],
        preprocessors: {
            '{app,app/!(vendor|demo-code)+(**)/**}/!(*data|*spec)+(.js)': ['coverage'],

            'app/**/*.html': ['ng-html2js'],
            '**/*.json': ['ng-json2js']
        },
        ngHtml2JsPreprocessor: {moduleName: 'ngMock'},
        ngJson2JsPreprocessor: {
            /**
             * app/demo-code/dashboard-demo/domain-sample.json will be transformed to angular module
             * with module name 'demo_code_dashboard_demo_domain_sample' and
             * value that we need to inject will be same as this long path - demo_code_dashboard_demo_domain_sample
             *
             * @param {string} filepath - real file path, like 'app/demo-code/dashboard-demo/domain-sample.json'
             * @return {string} moduleName/serviceName like demo_code_dashboard_demo_domain_sample
             */
            cacheIdFromPath: function (filepath) {
                // module name, and same name will get injected service
                var moduleName = filepath.split(/[\/\.\-]/);
                moduleName.shift();
                moduleName.pop();
                //console.log(moduleName.join('_'))
                return moduleName.join('_');
            }
        },
        reporters: ['dots', 'coverage', 'junit'],
        coverageReporter: {
            subdir: function (browser) {
                return browser.split(' ').join('_');
            },
            reporters: [
                {dir: 'coverage', type: 'html'},
                {dir: 'coverage', type: 'cobertura', file: 'coverage.xml'}
            ]
        },
        junitReporter: {
            outputDir: 'coverage', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'junit.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: 'Unit tests', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true // add browser name to report and classes names
        },
        reportSlowerThan: 600,
        logLevel: config.LOG_INFO // for debug use config.LOG_DEBUG
    });
};
