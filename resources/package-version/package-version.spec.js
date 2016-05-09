describe('package-version', function () {
    beforeEach(module('package-version', function($provide){
        $provide.value('appVersion', null);
    }));

    var directive;
    beforeEach(inject(function (directiveBuilder, $httpBackend) {
        $httpBackend.whenGET('package.json').respond({version: 4});
        directive = directiveBuilder.$build('<div package-version="appVersion"</div>');
        $httpBackend.flush();
    }));

    it('should be defined', function () {
        expect(directive.element).toBeDefined();
    });
});
