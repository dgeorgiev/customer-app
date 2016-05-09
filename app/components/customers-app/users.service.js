angular.module('ca.users-service', [
    'ngResource',
    'ui.router'
]).service('usersService', function ($rootScope, $resource, $state) {

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
    
    Users.prototype.remove = function(){
        
        var id = this._id.$oid;
        
        this.$delete({id: id });
        
        $rootScope.$broadcast('deletedBookmark', id);
        
    };
    
    Users.prototype.save = function() {
        
        var id = this._id.$oid;
        
        this.$update({id: id }, function(){
            $rootScope.$broadcast('usersUpdated', this);     
        });
        
       
        
    };
    
    return Users;
    
});
