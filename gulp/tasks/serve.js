var gulp = require('gulp');
var config = require('../config');

gulp.task('serve', ['$sass'], function (cb) {
    require('run-sequence')('default', cb);
});

gulp.task('$open', ['$inject-files'],  function () {
    gulp.src('index.html').pipe(require('gulp-open')('', {url: config.openUrl}));
});

gulp.task('$connect', ['$inject-files'],  function () {
    return require('gulp-connect').server({root: __dirname + '/../../'});
});

gulp.task('default', ['$connect', '$watch', '$watch-index', '$open']);
