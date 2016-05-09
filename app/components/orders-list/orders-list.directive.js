angular.module('ca.components.orders-list', [
    'ca.orders-service'
]).directive('ordersList', function (ordersService) {
    return {
        templateUrl: 'app/components/orders-list/orders-list.template.html',
        link: function($scope){
            
            $scope.orders = ordersService.query();
            
            $scope.$on('deletedBookmark', function(event, id){
                $scope.orders = $scope.bookmarks.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
});


