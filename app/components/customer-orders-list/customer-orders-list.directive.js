angular.module('ca.components.customer-orders-list', [
    'ca.users-service',
    'ca.orders-service',
    'ui.router'
]).directive('customerOrdersList', function (usersService, ordersService, $state) {
    return {
        templateUrl: 'app/components/customer-orders-list/customer-orders-list.template.html',
        scope: {
            customer: "=",
        },
        link: function($scope){
            
            
            var _customer = $state.params.customer || $scope.customer;
            
            usersService.query({q: {_id: {$oid: _customer}}}, function(res){
                $scope.user = res[0];
            });
            
            $scope.orders = ordersService.byCustomer(_customer);
            
            $scope.$on('deletedBookmark', function(event, id){
                $scope.orders = $scope.bookmarks.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
});


