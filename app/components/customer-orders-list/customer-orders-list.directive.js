angular.module('ca.components.customer-orders-list', [
    'ca.users-service',
    'ca.orders-service',
    'ca.components.order-form',
    'ui.router'
]).directive('customerOrdersList', function (usersService, ordersService, $state) {
    return {
        templateUrl: 'app/components/customer-orders-list/customer-orders-list.template.html',
        scope: {
            customer: "=",
            showForm: "="
        },
        link: function($scope){
            
            
            var _customer = $state.params.customer || $scope.customer;
            
            usersService.query({q: {_id: {$oid: _customer}}}, function(res){
                $scope.user = res[0];
            });
            
            $scope.orders = ordersService.byCustomer(_customer);
            
            $scope.edit = function(record) {
                $scope.order = record;
            }
            
            $scope.$on('ordersUpdated', function(){
                $scope.orders = ordersService.byCustomer(_customer);
            });
            
            $scope.$on('deletedOrder', function(event, id){
                $scope.orders = $scope.orders.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
});


