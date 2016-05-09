angular.module('package-version', []).directive('packageVersion', function ( $http, $injector, $q ) {
    function getPackageJsonVersion() {
        return $http.get('package.json').then(function ( response ) { return response.data.version; });
    }

    return {
        restrict: 'A',
        scope: { key: '@packageVersion' },
        transclude: true,
        template: '' +
        '<div class="text-right grey-text">' +
            '<span class="name" ng-transclude></span>' +
            '&nbsp;&nbsp;<b>v{{version}}</b>' +
        '</div>',
        link: function ( $scope ) {
            $q.when($injector.get($scope.key) || getPackageJsonVersion()).then(function ( version ) {
                $scope.version = version;
            });
        }
    };
});
