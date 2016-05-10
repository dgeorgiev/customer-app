describe('ca.components.orders-list', function () {
    
    beforeEach(module('ui.router'));
    beforeEach(module('ca.components.orders-list'));
    
    var directive, $state, orders;
    beforeEach(inject(function (directiveBuilder, _$state_) {
        $state = _$state_;
        
        directive = directiveBuilder.$build('<orders-list orders="orders" show-form="showForm"></orders-list>');
        directive.scope.orders = [
            {
                "_id": {
                "$oid": "571785b8e4b046f2cf46547a"
                },
                "url": "http://google.bg",
                "name": "Google sda",
                "tags": "test, asdzxc"
            },
            {
                "_id": {
                "$oid": "57163da5e4b065a8c4d775e8"
                },
                "name": "Facebook",
                "tags": "test, test2",
                "url": "http://facebook.com"
            },
            {
                "_id": {
                "$oid": "5718db94e4b0e99eb262b0ed"
                },
                "name": "Twitter",
                "url": "http://twitter.com",
                "tags": "twitter, hello"
            }
        ];
    }));



    it('should have a tag filter', inject(function($filter) {
        expect($filter('tag')).toBeDefined();
    }));
    
    it('should list correct number of orders from scope', function(){
        directive.scope.$digest();
        expect(directive.element.children().find('md-list-item').length).toEqual(3);
        
        directive.scope.orders = [];
        directive.scope.$digest();
        expect(directive.element.children().find('md-list-item').length).toEqual(0);
        
    });
    
    it('should filter records by tag', inject(function (tagFilter) {
        expect(tagFilter(directive.scope.orders, '').length).toEqual(3);
        
        expect(tagFilter(directive.scope.orders, 'twitter').length).toEqual(1);
    }));
    
    
    it('should delete bookmark on deletedBookmark event', function(){

        var $broadcast = spyOn(directive.scope, '$on').and.callThrough();
        directive.scope.$digest();
        
        expect(directive.scope.orders.length).toEqual(3);
        
        directive.scope.$broadcast('deletedBookmark', '571785b8e4b046f2cf46547a');        
        directive.scope.$digest();
        
        expect(directive.scope.orders.length).toEqual(2);

    });
    
    
});
