angular.module('ba.components.bookmark-form', [
    'ca.customers-service'
]).directive('bookmarkForm', function($rootScope, $mdDialog, $mdMedia, customersService){
    return {
        templateUrl: 'app/components/bookmark-form/bookmark-form.template.html',
        link: function($scope){
            
            $scope.close = function() {
                $mdDialog.cancel();
            };
            
            $scope.clear = function(form) {
                $scope.bookmark = {};
                $scope.bookmark.url = '';
                form.$setPristine();
                form.$setUntouched();
            };
            
            $scope.save =  function(form) {
                bookmarksService.save($scope.bookmark, function(){
                    $rootScope.$broadcast('bookmarksUpdated');
                });
            };
        }
    }      
});