angular.module('ca.components.orders-list', [
    'ca.orders-service',
    'ui.router'
]).directive('ordersList', function (ordersService, $state) {
    return {
        templateUrl: 'app/components/orders-list/orders-list.template.html',
        link: function($scope){
            
            console.log($state);
            
            if($state.params.customer){
                $scope.orders = ordersService.byCustomer($state.params.customer);
            } else {
                $scope.orders = ordersService.query();
            }
            
            $scope.$on('deletedBookmark', function(event, id){
                $scope.orders = $scope.bookmarks.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
});


