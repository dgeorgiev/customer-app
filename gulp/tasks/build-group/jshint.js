var gulp = require('gulp');
var config = require('../../config');

gulp.task('jshint-full', function () {
    var jshint = require('gulp-jshint');
    var stylish = require('jshint-stylish');
    var jshintXMLReporter = require('gulp-jshint-xml-file-reporter');

    return gulp.src(config.jshintSrc)
        .pipe(jshint(config.jshintRC))
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter(jshintXMLReporter))
        .on('end', jshintXMLReporter.writeFile({
            format: 'checkstyle',
            filePath: './jshint.xml',
            alwaysReport: true
        }));
});
