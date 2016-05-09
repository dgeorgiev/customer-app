var gulp = require('gulp');
var config = require('../../config');

gulp.task('test', function (done) {
    require('karma').server.start({
        configFile: config.karmaConf,
        singleRun: true
    }, done);
});
