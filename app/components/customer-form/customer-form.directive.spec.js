describe('ba.components.bookmarks-form', function () {
    
    beforeEach(module('ui.router'));
    beforeEach(module('material.components.dialog'));
    
    beforeEach(module('ba.components.bookmark-form', function ($provide ) {
        $provide.factory('bookmarksService', function () {
            return {
                'save': function(id, callback){
                    var fakePromise = $q.defer();
                    fakePromise.resolve({});
                    callback();
                    return {
                        $promise: fakePromise.promise
                    };
                }
            };
        });
    }));
    
    var directive, $state, $mdDialog, $q;
    beforeEach(inject(function (directiveBuilder, _$state_, _$mdDialog_, bookmarksService, _$q_) {
        $state = _$state_;
        $mDialog = _$mdDialog_;
        $q =  _$q_;
        
        directive = directiveBuilder.$build('<bookmark-form></bookmark-form>');
        
        directive.scope.bookmarkForm = {
            $valid: false,
            $setPristine: function() {},
            $setUntouched: function() {}
        };
        directive.scope.close();

    }));


    it('should equal to ethalon html', inject(function () {
        
        expect(directive.element.html()).toBeDefined();
        

    }));

    it('should clear the form', function(){
        
        directive.scope.bookmark = {
            name: 'hello',
            url: 'http://hello.co',
            tags: ''
        };
        
        
        expect(directive.scope.bookmark).toEqual({name: 'hello', url: 'http://hello.co', tags: ''});
        
        directive.scope.clear(directive.scope.bookmarkForm);
        
        expect(directive.scope.bookmark).toEqual({url: ''});
    });
    
    
    it('should broadcast an event when bookmark is saved', inject(function($rootScope){
        
        var $broadcast = spyOn($rootScope, '$broadcast');
        
        directive.scope.save(directive.scope.bookmarkForm);
        directive.scope.$digest();
         
        expect($broadcast).toHaveBeenCalledWith('bookmarksUpdated');
    }));
    
    
    
});
