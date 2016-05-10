angular.module('ca.orders-service', [
    'ngResource',
    'ui.router'
]).service('ordersService', function ($rootScope, $resource, $state) {

    var c = {
        mongolabUrl: 'https://api.mongolab.com/api/1/databases',
        collection: 'orders',
        dataBase: 'angular-training-customers',
        apiKey: 'KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA'
    };
    var url = [c.mongolabUrl, c.dataBase, 'collections', c.collection, ':id'].join('/');
    
    
    
    var Orders = $resource(url, {apiKey: c.apiKey}, {
        update: {method: 'PUT'}
    });
    
    Orders.prototype.remove = function(){
        
        var id = this._id.$oid;
        
        this.$delete({id: id });
        
        $rootScope.$broadcast('deletedBookmark', id);
        
    };
    
    Orders.byCustomer = function(id) {
        return this.query({q: {customer_id: id}});
    }
    
    Orders.prototype.save = function() {
        
        var id = this._id.$oid;
        
        this.$update({id: id }, function(){
            $rootScope.$broadcast('ordersUpdated', this);     
        });
        
       
        
    };
    
    return Orders;
    
});
