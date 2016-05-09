var gulp = require('gulp');
var config = require('../config');

gulp.task('$server', [], function () {
    return require('gulp-connect').server({
        root: config.connectDist,
        port: config.connectPort
    });
});

gulp.task('host', ['$clean-generated'], function (cb) {
    return require('run-sequence')(
        ['$sass', '$ng-templates', '$ng-config'],
        '$usemin',
        '$clean-temp',
        '$server',
        cb
    );
});