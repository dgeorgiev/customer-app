describe('ca.components.customer-form', function () {
   
    beforeEach(module('ca.users-service'));
    
    beforeEach(module('ca.components.customer-form', function ($provide ) {
        $provide.factory('usersService', function () {
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
    
    var directive, $state, $q;
    beforeEach(inject(function (directiveBuilder, _$state_, usersService, _$q_) {
        $state = _$state_;
        $q =  _$q_;
        
        directive = directiveBuilder.$build('<customer-form></customer-form>');
        
        directive.scope.userForm = {
            $valid: false,
            $setPristine: function() {},
            $setUntouched: function() {}
        };
        
        usersService.prototype.save = function(callback){
            console.log('booo');
            callback();
        };


    }));


    it('should equal to ethalon html', inject(function () {
        
        expect(directive.element.html()).toBeDefined();
        
        
    }));

    it('should clear the form', function(){
        
        
        var scope = directive.element.isolateScope();
        scope.customer = {
            first_name: 'John',
            last_name: 'Doe',
            city: 'Sofia'
        };
        
        
        expect(scope.customer).toEqual({
            first_name: 'John',
            last_name: 'Doe',
            city: 'Sofia'
        });
        
        scope.clear(scope.userForm);
        
        expect(scope.customer).toEqual({});
        
    });
    
    
    it('should broadcast an event when user is saved', inject(function($rootScope){
        var scope = directive.element.isolateScope();
        scope.customer = {
            first_name: 'John',
            last_name: 'Doe',
            city: 'Sofia'
        };
        var $broadcast = spyOn($rootScope, '$broadcast');
        
        scope.save(scope.userForm);
        
        
        
        scope.customer = {
            first_name: 'John',
            last_name: 'Doe',
            city: 'Sofia',
            _id: '1'
        };
        
        scope.save(scope.userForm);
        
        scope.$digest();
         
        expect($broadcast).toHaveBeenCalledWith('usersUpdated');
    }));
    
    
    
});
