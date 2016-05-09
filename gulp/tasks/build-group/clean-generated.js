var gulp    = require('gulp');
var config  = require('../../config');

gulp.task('$clean-generated', function () {
    return gulp.src(config.cleanGeneratedSrc).pipe(require('gulp-clean')());
});
