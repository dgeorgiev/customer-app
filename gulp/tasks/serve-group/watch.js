var gulp = require('gulp');
var config = require('../../config');
var eventLogger = require('../../utils/event-logger');
var compileSass = require('../../utils/compile-sass-fn');

gulp.task('$watch', ['$inject-files'], function () {
    var clean = require('gulp-clean');
    var livereload = require('gulp-livereload');

    livereload.listen();
    gulp.watch(config.watchAssets, function (event) {
        eventLogger.log(event);
        var thread = gulp.src(event.path);
        if (!config.ignoreLiveReloadOnNonCss) {
            thread.pipe(livereload());
        }
    });
    gulp.watch(config.appDir + '/**/*.scss', function (event) {
        var path = event.path;
        eventLogger.log(event);
        if (event.type === 'deleted') {
            path = path.replace('.scss', '.css');
            return gulp.src(path).pipe(clean());
        } else {
            var folder = path.slice(0, path.lastIndexOf(/[\/\\]/.exec(path)[0]));
            eventLogger.logCss(path);
            return compileSass(path, folder).pipe(livereload());
        }
    });
}).on('change', function(arguments){
    require('gulp-livereload').changed.apply(this, arguments);
});