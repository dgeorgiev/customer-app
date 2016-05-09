angular.module('app', [
    'ca.components.customers-app',
    'ngMaterial',
    'ngMdIcons',
    'ngAnimate',
    'app.templates'
]).directive('app', function() {
    return {
        templateUrl: 'app/app.module.html'
    };
});



angular.module('app.templates', []);

angular.module('app').config(function($mdThemingProvider) {
    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.theme('default')
        .primaryPalette('blue', {
            'default': '500',
            'hue-1': '50'
        });
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});
