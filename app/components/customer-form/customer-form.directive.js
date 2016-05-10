angular.module('ca.components.customer-form', [
    'ca.users-service'
]).directive('customerForm', function($rootScope, $mdDialog, $mdMedia, usersService){
    return {
        templateUrl: 'app/components/customer-form/customer-form.template.html',
        scope: {
            customer: '='
        },
        link: function($scope){
            
            $scope.clear = function(form) {
                form.$setPristine();
                form.$setUntouched();
                $scope.customer = {};
            };
            
            $scope.save =  function(form) {
                if($scope.customer._id){
                    $scope.customer.save(function(){
                        $rootScope.$broadcast('usersUpdated');
                    });
                } else {
                    usersService.save($scope.customer, function(){
                        $rootScope.$broadcast('usersUpdated');
                    });
                }
            };
        }
    }      
});