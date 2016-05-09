var gulp    = require('gulp');
var config  = require('../../config');
var eventLogger = require('../../utils/event-logger');

gulp.task('$watch-index', ['$inject-files'], function () {
    var runSequence = require('run-sequence');

    gulp.watch(config.watchIndexSrc, {interval: 2000}, function (event) {
        if (event.type !== 'changed' || event.path.indexOf('index-inject.html') !== -1) {
            eventLogger.log(event);
            runSequence('$inject-files');
        }
    });
});