angular.module('ca.components.customers-list', [
    'ca.users-service',
    'ca.components.customer-form'
]).directive('customersList', function (usersService) {
    return {
        templateUrl: 'app/components/customers-list/customers-list.template.html',
        scope: {
            users: '='  
        },
        link: function($scope){
            
            $scope.users = $scope.users || [];

            $scope.$on('deletedUser', function(event, id){
                $scope.users = $scope.users.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
            $scope.edit = function(record) {
                $scope.customer = record;
            }
            
        }
    };
});
