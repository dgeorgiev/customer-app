var gulp = require('gulp');
var config = require('../../config');
var compileSass = require('../../utils/compile-sass-fn');

gulp.task('$sass', function () {
    return compileSass(config.appDir + '/**/*.scss', config.appDir)
});