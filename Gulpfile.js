(function main() {

    var mainModule = 'module/UploadButton.js',
        vendorDest = 'example/vendor/upload-button',
        devDist    = 'upload-button.js',
        minDist    = 'upload-button.min.js';

    var gulp   = require('gulp'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        karma  = require('gulp-karma'),
        jshint = require('gulp-jshint');

    gulp.task('build', function gulpBuild() {

        return gulp.src(mainModule)
                   .pipe(rename(devDist))
                   .pipe(gulp.dest('dist'))
                   .pipe(gulp.dest(vendorDest))
                   .pipe(rename(minDist))
                   .pipe(uglify())
                   .pipe(gulp.dest('dist'));

    });

    gulp.task('hint', function gulpHint() {

        return gulp.src(mainModule)
                   .pipe(jshint('.jshintrc'))
                   .pipe(jshint.reporter('default'));

    });

    gulp.task('karma', function karmaTests() {

        return gulp.src([])
                   .pipe(karma({
                       configFile: 'karma.conf.js',
                       action: 'run'
                   }))
                   .on('error', function onError(error) {
                       throw error;
                   });

    });

    gulp.task('test', ['hint', 'karma']);
    gulp.task('default', ['test', 'build']);

})();