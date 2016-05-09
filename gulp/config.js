var pkg = require('../package.json');
var tempFolder = '.tmp';
var buildFolder = 'deployment';
var appDir = 'app';

function dashToCamel(s) {
    return s.replace(/-([a-z])/g, function (m, w) {
        return w.toUpperCase();
    });
}

var resourcesDir = __dirname + '/../resources';

module.exports = {
    ngtemplates: {
        src: [
            appDir + '/**/*.html',
            '!' + appDir + '/**/example.html',
            '!' + appDir + '/**/*.spec.html'
        ],
        settings: {
            root: appDir + '/',
            module: pkg.name + '.templates'
        }
    },
    ngconfig: {
        name: pkg.name + '-constant',
        constants: (function (c) {
            c[dashToCamel(pkg.name) + 'Version'] = pkg.version;
            return c;
        })({})
    },
    inject: {
        target: [
            appDir + '/**/_*.js',
            appDir + '/**/*.module.js',
            appDir + '/**/*.directive.js',
            appDir + '/**/*.js',
            appDir + '/**/*.css',
            '!' + appDir + '/demo-code/**/*.css',
            '!' + appDir + '/demo-code/**/*.js',
            '!' + appDir + '/vendor/**/*.css',
            '!' + appDir + '/vendor/**/*.js',
            '!' + appDir + '/**/*spec.js',
            '!' + appDir + '/**/*test-data.js'
        ],
        vendor: [
            appDir + '/vendor/**/*.css',
            appDir + '/vendor/**/*.js'
        ],
        'demo-code': [
            appDir + '/demo-code/**/*.css',
            appDir + '/demo-code/**/_*.js',
            appDir + '/demo-code/**/*.module.js',
            appDir + '/demo-code/**/*.js',
            '!' + appDir + '/**/*spec.js'
        ]
    },

    usemin: {
        fonts: {
            src: appDir + '/**/font/*.*',
            dist: buildFolder + '/css/font/'
        },
        injectSrc: [tempFolder + '/templates.js', tempFolder + '/package.js'],
        src: 'index.html',
        dist: buildFolder + '/'
    },

    cleanGeneratedSrc: [
        buildFolder + '/*',
        '!' + buildFolder + '/*.nuspec',
        'index.html',
        appDir + '/**/*.{css,map}',
        appDir + '/maps',
        '!' + appDir + '/vendor/**/*.css',
        '!' + appDir + '/copied-from-bower/**/*.css',
        'coverage/**/*.html',
        'coverage/**/*.js',
        'coverage/**/*.css'
    ],
    tempFolderPath: tempFolder,

    connectDev: __dirname + '/../',
    connectDist: __dirname + '/../' + buildFolder,

    jshintSrc: [
        appDir + '/**/*.js',
        'gulpfile.js', 'gulp/**.*',
        resourcesDir + '**/*.js',
        '!' + appDir + '/vendor/**/*.js',
        '!' + appDir + '/copied-from-bower/**/*.js'
    ],
    jshintRC: resourcesDir + '/.jshintrc',

    watchAssets: [
        appDir + '/**/*.js',
        appDir + '/**/*.html',
        '!' + appDir + '/**/*.spec.js',
        '!' + appDir + '/**/*.spec.html',
        'index.html'
    ],
    watchIndexSrc: [appDir + '/**/*.{js,css}', 'index-inject.html'],
    appDir: appDir,
    karmaConf: resourcesDir + '/karma.conf.js',
    openUrl: 'http://localhost:8080'
};
