module.exports = function(config) {

    var customLaunchers = {
        sl_chrome: {
            base: 'SauceLabs',
            browserName: 'Chrome',
            platform: 'OS X 10.9',
            version: '39'
        }
    };

    config.set({

        frameworks: ['jasmine'],
        files: [
            'module/UploadButton.js',
            'tests/spec.js'
        ],
        sauceLabs: {
            testName: 'UploadButton Karma Tests'
        },
        customLaunchers: customLaunchers,
        browsers: Object.keys(customLaunchers),
        reporters: ['saucelabs', 'progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        singleRun: true

    });
};