angular.module('ca.components.customers-app', [
    'ca.components.customers-list',
    'ca.components.customer-orders-list',
    'ca.components.orders-list',
    'ca.users-service',
    'ca.orders-service',
    'ui.router'
]).directive('customersApp', function($mdDialog, usersService, ordersService){
    return {
        templateUrl: 'app/components/customers-app/customers-app.template.html',
        link: function($scope){
            $scope.users = usersService.query();
            $scope.orders = ordersService.query();
            
            ordersService.byCustomer('5730ebccb3f30a5c0ce968bd');
            
            $scope.$on('usersUpdated', function(event){
                $scope.users = usersService.query();
            });
            
        }
    }      
});


angular.module('ca.components.customers-app').config(function($stateProvider) {
  $stateProvider.state('users', {
    url: '/users',
    template: '<customers-list users="users"></customers-list>'
  }).state('orders', {
    url: '/orders',
    template: '<orders-list></orders-list>'
  }).state('customerOrders', {
    url: '/orders/:customer',
    template: '<customer-orders-list show-form="true"></customer-orders-list>'
  });
});