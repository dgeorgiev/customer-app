var FS = require('fs');
var Path = require('path');

module.exports = function requireDir( name ) {
    var dir = Path.resolve(name);
    FS.readdirSync(dir).filter(function ( name ) {
        return name.charAt(0) !== '.';
    }).forEach(function ( file ) {
        var path = Path.resolve(dir, file);
        if ( FS.statSync(path).isDirectory() ) {
            requireDir(path);
        } else {
            require(path);
        }
    });
};
