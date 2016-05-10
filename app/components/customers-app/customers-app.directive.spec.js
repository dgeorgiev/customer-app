describe('ca.components.customers-app', function () {
    
    beforeEach(module('ui.router'));
    beforeEach(module('ca.components.customers-app'));
    
    beforeEach(module('ca.components.customers-app', function ($provide ) {
        var users = [ { "_id" : { "$oid" : "5730ebccb3f30a5c0ce968bd"} , "first_name" : "Viktor" , "last_name" : "Bryan" , "city" : "Sofia"} , { "_id" : { "$oid" : "5730ebecb3f30a5c0ce968c9"} , "first_name" : "Steve" , "last_name" : "Doe" , "city" : "London"} ];
        var orders = [ { "_id" : { "$oid" : "5730f970b3f30a23586f7790"} , "product" : "product 1" , "quantity" : "1" , "price" : "350" , "customer_id" : "5730ebccb3f30a5c0ce968bd"} , { "_id" : { "$oid" : "5730f990b3f30a23586f7794"} , "product" : "product 2" , "quantity" : 5 , "price" : "350" , "customer_id" : "5730ebccb3f30a5c0ce968bd"} , { "_id" : { "$oid" : "57319c62dcba0f03afc2d800"} , "product" : "product 3" , "quantity" : 1 , "price" : "350" , "customer_id" : "5730ebecb3f30a5c0ce968c9"} , { "_id" : { "$oid" : "5731d5b40a00b22864fcfb8e"} , "product" : "asd" , "quantity" : "sad" , "price" : "das"} , { "_id" : { "$oid" : "5731d7a30a00b22864fd0e4c"} , "product" : "test" , "quantity" : "1" , "price" : "51" , "customer_id" : "5731b9c8f8c2e72aa0d4ada7"} , { "_id" : { "$oid" : "5731d7b00a00b22864fd0ec3"} , "product" : "test" , "quantity" : "12" , "price" : "78" , "customer_id" : "5731b9c8f8c2e72aa0d4ada7"} , { "_id" : { "$oid" : "5731d7d8f8c2e72aa0d5a20b"} , "product" : "gogo" , "quantity" : "10" , "price" : "15" , "customer_id" : "5731ba0b0a00b22864fc0d5a"} , { "_id" : { "$oid" : "5731d7f3f8c2e72aa0d5a307"} , "product" : "bla" , "quantity" : "1" , "price" : "67" , "customer_id" : "5731ba0b0a00b22864fc0d5a"} , { "_id" : { "$oid" : "5731d8400a00b22864fd143c"} , "product" : "asd" , "quantity" : "1" , "price" : "1" , "customer_id" : "5731ba0b0a00b22864fc0d5a"} , { "_id" : { "$oid" : "5731d8ea0a00b22864fd1b14"} , "product" : "product 3" , "quantity" : "3" , "price" : "65" , "customer_id" : "5730ebccb3f30a5c0ce968bd"} ];
        $provide.factory('usersService', function () {
            return {
                'get': function () {
                    return users[0];
                },
                'update': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(users);
                    return {
                        $promise: fakePromise.promise
                    };
                },
                'query': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(users);
                    return {
                        $promise: fakePromise.promise
                    };
                }
            };
        });
        $provide.factory('ordersService', function () {
            return {
                'get': function () {
                    return orders[0];
                },
                'update': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(orders);
                    return {
                        $promise: fakePromise.promise
                    };
                },
                'query': function () {
                    var fakePromise = $q.defer();
                    fakePromise.resolve(orders);
                    return {
                        $promise: fakePromise.promise
                    };
                }
            };
        });
    }));
    
    var directive, $state, $mdDialog, $q;
    beforeEach(inject(function (directiveBuilder, _$state_, _$q_) {
        $state = _$state_;
        $q =  _$q_;
        
        directive = directiveBuilder.$build('<customers-app></customers-app>');
       
    }));





    it('should equal to ethalon html', inject(function () {
        expect(directive.element.html()).toBeDefined();
    }));
    
    
    
    it('should update when orders update event is broadcasted', inject(function () {
        var $broadcast = spyOn(directive.scope, '$on').and.callThrough();
        
    }));
    
});
