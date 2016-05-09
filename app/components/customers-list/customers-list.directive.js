angular.module('ba.components.bookmarks-list', [
    'ui.router'
]).directive('bookmarksList', function ($state) {
    return {
        templateUrl: 'app/components/bookmarks-list/bookmarks-list.template.html',
        scope: {
            bookmarks: '=',
            tagsMap: '=',
            showForm: '=',
        },
        link: function($scope){
            $scope.bookmarks = $scope.bookmarks || [];
            $scope.selectedTag = $state.params.tag;
            
            $scope.$on('deletedBookmark', function(event, id){
                $scope.bookmarks = $scope.bookmarks.reduce(function(ret, element){
                    if(element._id.$oid != id) ret.push(element);
                    return ret;
                }, []);
            });
            
        }
    };
}).filter('tag', function(){
    return function(records, tag){
        if(records.length) {
            return records.filter(function(record){
                return (tag) ? record.tags.indexOf(tag) >= 0 : true;
            });
        }
        return records;
    };
});
