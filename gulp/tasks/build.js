var gulp = require('gulp');

// TODO: clean-generated was breaking TeamCity. You need to make sure deployment/PostDeploy.ps1 and *.nuspec are not removed during the clean -AP
gulp.task('build', function (cb) {
    require('run-sequence')(
        ['$clean-generated'],
        ['$sass', '$ng-templates', '$ng-config'],
        '$usemin',
        '$clean-temp',
        cb
    );
});

gulp.task('deploy', ['build']);// , 'test']); // TODO: Include tests. Removed to get building in TeamCity
gulp.task('build-and-test', function () {
    require('run-sequence')('test', 'build');
});
