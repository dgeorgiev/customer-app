var gutil = require('gulp-util');

function coloredType(t) {
    var val = '[' + t + '] ';
    if (t === 'changed') {
        return gutil.colors.green(val);
    } else {
        return val;
    }
}

module.exports = {
    log: function (event) {
        gutil.log(coloredType(event.type), event.path);
    },
    logCss: function (path) {
        gutil.log(gutil.colors.cyan('[generated] '), path.replace('.scss', '.css'));
    }
};

