describe('ba.components.bookmarks-app', function () {
    
    beforeEach(module('ui.router'));
    beforeEach(module('material.components.dialog'));
    beforeEach(module('ba.components.bookmarks-app'));
    
    
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
                'get': function () {
                    return bookmarks[0];
                },
                'update': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(bookmarks);
                    return {
                        $promise: fakePromise.promise
                    };
                },
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
    
    var directive, $state, $mdDialog, $q;
    beforeEach(inject(function (directiveBuilder, _$state_, _$mdDialog_, _$q_) {
        $state = _$state_;
        $mDialog = _$mdDialog_;
        $q =  _$q_;
        
        directive = directiveBuilder.$build('<bookmarks-app></bookmarks-app>');
       
    }));





    it('should equal to ethalon html', inject(function () {
        expect(directive.element.html()).toBeDefined();
    }));
    
    
    it('should show form for create/edit bookmark', inject(function () {
        
        
        directive.scope.showForm();

        directive.scope.showForm('', {
            _id: {}
        });
        
        directive.scope.$digest();
        
        expect(directive.scope.showForm).toBeDefined();
        
    }));
    
    it('should update when bookmarks update event is broadcasted', inject(function () {
        var $broadcast = spyOn(directive.scope, '$on').and.callThrough();
        
        directive.scope.$broadcast('bookmarksUpdated', '571785b8e4b046f2cf46547a', 'dasdsadas');
    }));
    
});
