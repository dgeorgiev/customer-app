angular.module('ca.customers-service', [
    'ngResource',
    'ui.router'
]).service('customersService', function ($rootScope, $resource, $state) {

    var c = {
        mongolabUrl: 'https://api.mongolab.com/api/1/databases',
        collection: 'bookmarks',
        dataBase: 'angular-training-bookmarks',
        apiKey: 'KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA'
    };
    var url = [c.mongolabUrl, c.dataBase, 'collections', c.collection, ':id'].join('/');
    
    
    
    // var Bookmarks = $resource(url, {apiKey: c.apiKey}, {
    //     update: {method: 'PUT'}
    // });
    
    // Bookmarks.prototype.remove = function(){
        
    //     var id = this._id.$oid;
        
    //     this.$delete({id: id });
        
    //     $rootScope.$broadcast('deletedBookmark', id);
        
    // };
    
    // Bookmarks.prototype.save = function() {
        
    //     var id = this._id.$oid;
        
    //     this.$update({id: id }, function(){
    //         $rootScope.$broadcast('bookmarksUpdated', this);     
    //     });
        
       
        
    // };
    
    // return Bookmarks;
    
});
