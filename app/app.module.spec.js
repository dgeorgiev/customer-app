describe('app', function () {


    beforeEach(module('ngMaterial'));
    beforeEach(module('ngAria'));
    beforeEach(module('ngMdIcons'));
    beforeEach(module('app'));
    
    beforeEach(module('ba.components.bookmarks-app', function ($provide ) {
        var bookmarks = [
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
        $provide.factory('bookmarksService', function () {
            return {
                'query': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(bookmarks);
                    return {
                        $promise: fakePromise.promise
                    };
                }
            };
        });
    }));
    
    
    var directive, $q;
    beforeEach(inject(function (directiveBuilder, _$q_) {
        $q = _$q_;
        directive = directiveBuilder.$build('<app></app>');    
    }));

    it('should have html rendered', inject(function () {
        expect(directive.element.html()).toBeDefined();
    }));
        
});
