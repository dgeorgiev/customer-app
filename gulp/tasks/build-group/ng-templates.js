var gulp = require('gulp');
var config = require('../../config');

gulp.task('$ng-templates', function () {
    var templateCache = require('gulp-angular-templatecache');

    return gulp.src(config.ngtemplates.src)
        .pipe(templateCache(config.ngtemplates.settings))
        .pipe(gulp.dest(config.tempFolderPath));
});