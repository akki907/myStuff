var appControllers=angular.module('app.controllers');

appControllers.controller('CreateController',function(BookmarkService,TagService,Storage,focus,$scope,CONSTANT,Helpers,toaster,$state){
    

  $scope.createContact=function(contact){
    console.log(contact);
    console.log($scope.contact.name);
    // $scope.bookmarkMessage=null;
    //  if(Helpers.undefined_or_empty(bookmark.link)){$scope.bookmarkMessage='Nay! looks like you forgot bookmark link'; return;}
    //  if(Helpers.undefined_or_empty(bookmark.description)){$scope.bookmarkMessage='Please fill in bookmark description'; return;}
    //  if(bookmark.inputTags.length < 1){$scope.bookmarkMessage='Nay! we need at least one tag for bookmark'; return;}
    //  var comma_separated_tags=Helpers.commaSeparatedTags(bookmark.inputTags);
    //  var post_body={"link":bookmark.link,"description":bookmark.description,"tags":comma_separated_tags,
    //                    "created_at":Date.now().toString(),"created_by":Storage.getUsername()};


     //
    //  BookmarkService.createBookmark(post_body)
    //  .then(function(response){
    //          toaster.pop('success','Bookmark created successfully');
    //          setTimeout(function(){$scope.bookmarkModal.hide();$scope.showBookmarks();},2000);
    //       },
    //       function(error){console.log("Error while creating bookmark"); }
    //     );
  }

  // $scope.deleteBookmark=function(_id){
  //     BookmarkService.deleteBookmark(_id)
  //        .then(function(response){
  //               $scope.deleteBookmarkModal.hide();
  //               toaster.pop("success","Bookmark deleted successfully");
  //               setTimeout(function(){$scope.showBookmarks();},2000);
  //             });
  //  }

});
