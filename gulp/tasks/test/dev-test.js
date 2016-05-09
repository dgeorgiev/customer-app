var gulp = require('gulp');
var config = require('../../config');

gulp.task('dev-test', function (done) {
    require('karma').server.start({
        configFile: config.karmaConf,
        singleRun: false
    }, done);
});