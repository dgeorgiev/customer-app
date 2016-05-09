module.exports = function (error) {
    var gulpUtil = require('gulp-util');
    var connect = require('gulp-connect');
    try {connect.serverClose();} catch (e) {}
    gulpUtil.log.apply(this, arguments);
    if (error instanceof  Error) {
        throw error;
    }
};