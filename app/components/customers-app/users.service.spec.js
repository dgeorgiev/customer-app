describe('ba.bookmarks-service', function () {
    
    
    beforeEach(module('ba.bookmarks-service'));
    
    var bookmarksService, $httpBackend;
    
    beforeEach(inject(function (_bookmarksService_, _$httpBackend_) {
        bookmarksService = _bookmarksService_;
        bookmarksService.prototype.$update = function(ignored, callback){
            callback();
        };
        $httpBackend = _$httpBackend_;
        $httpBackend.expect('GET', 'https://api.mongolab.com/api/1/databases/angular-training-bookmarks/collections/bookmarks?apiKey=KGtpIoEDeTqTkwISpgnhDarX_Vj1AdJA').respond([ { "_id" : { "$oid" : "57163da5e4b065a8c4d775e8"} , "name" : "Facebook" , "tags" : "test" , "url" : "http://facebook.com"} , { "_id" : { "$oid" : "5718db94e4b0e99eb262b0ed"} , "name" : "Twitter" , "url" : "http://twitter.com" , "tags" : "twitter, hello"} , { "_id" : { "$oid" : "571a082d0a00b2160cdda797"} , "name" : "google" , "url" : "http://google.bg" , "tags" : "google, evil"} , { "_id" : { "$oid" : "571dcd9ff8c2e747621458ec"} , "name" : "test" , "url" : "http://epam.com" , "tags" : "test, test2, test56"} ]
        );
        $httpBackend.when('DELETE', /mongolab/).respond(200);
        
    }));


    it('should get all bookmarks', inject(function($rootScope){

        var result = bookmarksService.query();
        
        $httpBackend.flush();
        
        expect(result.length).toEqual(4);
        
    }));

    it('should broadcast an event on delete', inject(function($rootScope){
        
        var result = bookmarksService.query();
        
        $httpBackend.flush();
        
        var $broadcast = spyOn($rootScope, '$broadcast');
        
        result.forEach(function(bookmark){
            bookmark.remove();
            expect($broadcast).toHaveBeenCalledWith('deletedBookmark', bookmark._id.$oid);
            bookmark.save();
        });
        
    }));
       
    it('should broadcast an event on delete', inject(function($rootScope){
        
        var result = bookmarksService.query();
        
        $httpBackend.flush();
        
        var $broadcast = spyOn($rootScope, '$broadcast');
        
        result.forEach(function(bookmark){
            bookmark.save();
            expect($broadcast).toHaveBeenCalledWith('bookmarksUpdated', this);
        });
    }));

});
