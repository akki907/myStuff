var appControllers=angular.module('app.controllers');

appControllers.controller('ContactController',function(Storage,BookmarkService,$scope,Helpers,$state,$modal,focus,toaster,ContactService,$state,$stateParams,NoteService){



  $scope.showContact=function(){
    ContactService.getContact().then(function(res){
        $scope.contact=res.data;
    });
  }



    $scope.showContactById = function(){
      ContactService.getContactById($stateParams.id)
      .then(function(response){
         $scope.editContact = response.data;
      });
    }

    $scope.UpdateContactDirectory = function(editContact){
      var request_body={"name":editContact.name,"address":editContact.address,"phoneno": editContact.phoneno};
      ContactService.updateContact($stateParams.id,request_body)
      .then(function(response){
              toaster.pop('success','Contact updated successfully');
              setTimeout(function(){$state.go('contact');},2000);
           },
           function(error){ console.log("Error while updating bookmark"); }
         );
    }



  $scope.createContact = function(contact){
    var postData={"name":contact.name,"address":contact.address,"phoneno":contact.phoneno,
                      "created_at":Date.now().toString(),"created_by":Storage.getUsername()
                  };
    ContactService.createContact(postData)
    .then(function(response){
      toaster.pop('success','Contact created successfully');
      setTimeout(function(){$state.go('contact');},2000);
    },
    function(error){console.log("Error while creating contact"); }
  )
};


// $scope.deleteContact = function(contact){
//   console.log(contact);
//   var postRequest = {"id":contact._id}
//   ContactService.deleteContactById(postRequest)
//   .then(function(response){
//       toaster.pop('success','Contact updated successfully');
//       // showContact();
//   })
// }


// for note
$scope.createNote = function(note){
  console.log(note);
  var postData={"title":note.title,"description":note.description,"content":note.content,
                    "created_at":Date.now().toString(),"created_by":Storage.getUsername()
                };
  NoteService.createNote(postData)
  .then(function(response){
    toaster.pop('success','Note created successfully');
    setTimeout(function(){$state.go('listNote');},2000);
  },
  function(error){console.log("Error while creating contact"); }
)
};



$scope.showNotes=function(){
  NoteService.getNotes().then(function(res){
      $scope.notes = res.data;
  });
}


$scope.showNoteById = function(){
  NoteService.getNoteById($stateParams.id)
  .then(function(response){
     $scope.note = response.data;
  });
}

});
