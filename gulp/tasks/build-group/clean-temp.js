var gulp    = require('gulp');
var config  = require('../../config');

gulp.task('$clean-temp', function (cb) {
    return gulp.src(config.tempFolderPath).pipe(require('gulp-clean')());
});