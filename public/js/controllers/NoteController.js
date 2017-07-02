var appControllers=angular.module('app.controllers');

appControllers.controller('NoteController',function(Storage,BookmarkService,$scope,Helpers,$state,$modal,focus,toaster,ContactService,$state,$stateParams,NoteService){



  $scope.createNote = function(note){
    var postData={"title":note.title,"description":note.description,"content":note.content,
                      "created_at":Date.now().toString(),"created_by":Storage.getUsername()
                  };
    NoteService.createNote(postData)
    .then(function(response){
      toaster.pop('success','Note created successfully');
      // setTimeout(function(){$state.go('contact');},2000);
    },
    function(error){console.log("Error while creating contact"); }
  )
};




});
