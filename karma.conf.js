module.exports = function(config) {

    config.set({

        frameworks: ['jasmine'],
        files: [
            'module/UploadButton.js',
            'tests/spec.js'
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome', 'ChromeCanary'],
        singleRun: true

    });
};