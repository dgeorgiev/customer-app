var gulp    = require('gulp');
var config  = require('../../config');

gulp.task('$ng-config', function () {
    var ngConfig = require('gulp-ng-config');

    return gulp.src('package.json')
        .pipe(ngConfig(config.ngconfig.name, {constants: config.ngconfig.constants}))
        .pipe(gulp.dest(config.tempFolderPath));
});