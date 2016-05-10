angular.module('ca.components.order-form', [
    'ca.orders-service'
]).directive('orderForm', function($rootScope, ordersService){
    return {
        templateUrl: 'app/components/order-form/order-form.template.html',
        scope: {
            user: '=',
            order: '=',
        },
        link: function($scope){
            
            $scope.clear = function(form) {
                form.$setPristine();
                form.$setUntouched();
                $scope.order = {};
            };
            $scope.save =  function(form) {
                if($scope.order._id){
                    $scope.order.save(function(){
                        $rootScope.$broadcast('ordersUpdated');
                    });
                } else {
                    $scope.order.customer_id = $scope.user._id.$oid;
                    ordersService.save($scope.order, function(){
                        $rootScope.$broadcast('ordersUpdated');
                    });
                    $scope.clear($scope.orderForm);
                }
            };
        }
    }      
});