angular.module('ca.users-service', [
    'ngResource',
    'ca.orders-service',
    'ui.router'
]).service('usersService', function ($rootScope, $resource, $state, ordersService) {

    var c = {
        mongolabUrl: 'https://api.mongolab.com/api/1/databases',
        collection: 'users',
        dataBase: 'angular-training-customers',
        apiKey: 'KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA'
    };
    var url = [c.mongolabUrl, c.dataBase, 'collections', c.collection, ':id'].join('/');
    
    
    
    var Users = $resource(url, {apiKey: c.apiKey}, {
        update: {method: 'PUT'}
    });
    
    Users.prototype.orders = function(){
        var id = this._id.$oid;
        return $rootScope.orders.filter(function(element){
            return element.customer_id == id;
        });
        
    };
    
    Users.prototype.remove = function(){
        
        var id = this._id.$oid;
        
        this.$delete({id: id });
        
        $rootScope.$broadcast('deletedUser', id);
        
    };
    
    Users.prototype.save = function() {
        
        var id = this._id.$oid;
        
        this.$update({id: id }, function(){
            $rootScope.$broadcast('usersUpdated', this);     
        });
        
       
        
    };
    
    return Users;
    
});
