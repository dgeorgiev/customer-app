angular.module('ngMock').factory('directiveBuilder', function ($rootScope, $compile) {
    return {
        build: function (htmlToCompile, scopeParams, controllers) {
            var scope = angular.extend($rootScope.$new(), scopeParams || {});
            var element = angular.element(htmlToCompile);
            if (controllers) {
                angular.forEach(controllers, function (value, key) {
                    element.data('$' + key + 'Controller', value);
                });
            }
            $compile(element)(scope);
            return {scope: scope, element: element};
        },
        $build: function () {
            var result = this.build.apply(this, arguments);
            result.scope.$digest();
            return result;
        }
    };
});

angular.element.prototype.child = function (selector, index) {
    return angular.element(index ? this[0].querySelectorAll(selector)[index] : this[0].querySelector(selector));
};

describe.module = function (name, fnn, dd) {
    var fn = dd ? ddescribe : describe;
    return fn(name, function (done) {
        beforeEach(module(name));
        fnn(done);
    });
};

ddescribe.module = function (name, fn) {
    return describe.module(name, fn, true);
};

