angular.module('ca.components.customers-app', [
    'ca.components.customers-list',
    'ca.components.orders-list',
    'ui.router'
]).directive('customersApp', function($mdDialog){
    return {
        templateUrl: 'app/components/customers-app/customers-app.template.html',
        link: function($scope){
            // $scope.bookmarks = bookmarksService.query();
            
            
            // $scope.$on('bookmarksUpdated', function(event){
            //     $scope.bookmarks = bookmarksService.query();
            //     $mdDialog.hide();
            // });
            
            // $scope.$watch('bookmarks', function(){
                
            //     $scope.tags = $scope.bookmarks.$promise.then(function(data){
                    
            //         data.forEach(function(record){
            //         record.tags.split(',').forEach(function(tag){
            //             if(!$scope.tags[tag.trim()]) {
                            
            //                     $scope.tags[tag.trim()] = {
            //                         name: tag.trim(),
            //                         count: 1
            //                     };
            //             } else {
            //                 $scope.tags[tag.trim()].count++;
            //             }
                        
            //         });
            //         });
                    
            //     });
            
            // });
            
            // $scope.showForm = function(ev, bookmark) {
            //     $mdDialog.show({
            //         templateUrl: 'app/components/bookmark-form/bookmark-form.dialog.html',
            //         parent: angular.element(document.querySelectorAll('.main-content')),
            //         targetEvent: ev,
            //         controller: function($scope){
            //             $scope.bookmark = bookmark || {};
            //             $scope.title = $scope.bookmark._id ? 'Edit bookmark' : 'Add bookmark';
            //         },
                    
            //         clickOutsideToClose: false,
            //         fullscreen: true
            //     });
                
            // };
            
        }
    }      
});


angular.module('ca.components.customers-app').config(function($stateProvider) {
  $stateProvider.state('users', {
    url: '/users',
    template: '<customers-list></customers-list>'
  }).state('orders', {
    url: '/orders',
    template: '<orders-list></orders-list>'
  });
});