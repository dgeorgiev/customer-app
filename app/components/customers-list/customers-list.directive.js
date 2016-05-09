angular.module('ca.components.customers-list', [
    'ca.users-service'
]).directive('customersList', function (usersService) {
    return {
        templateUrl: 'app/components/customers-list/customers-list.template.html',
        link: function($scope){
            
            $scope.users = usersService.query();
            
            $scope.$on('deletedBookmark', function(event, id){
                $scope.users = $scope.bookmarks.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
});
