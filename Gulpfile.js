(function main() {

    var mainModule = 'module/UploadButton.js',
        vendorDest = 'example/vendor/upload-button',
        devDist    = 'upload-button.js',
        minDist    = 'upload-button.min.js';

    var gulp   = require('gulp'),
        uglify = require('gulp-uglify'),
        rename = require('gulp-rename'),
        jshint = require('gulp-jshint');

    gulp.task('build', function gulpBuild() {

        gulp.src(mainModule)
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

    gulp.task('test', ['hint']);
    gulp.task('default', ['test', 'build']);

})();