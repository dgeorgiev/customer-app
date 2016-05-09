describe('hello world test', function () {
    beforeEach(function () {
        browser.get('http://localhost:8080');
    });

    it('should see hello kitty text', function () {
        expect($$('hello-world').getText()).toContain('hello kitty ^_^');
    });
});
