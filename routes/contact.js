var mongoose = require( 'mongoose' );
var Contact = mongoose.model( 'Contact' );

exports.getContactById=function(req,res){
  // console.log(req.query);
   Contact.findOne({"_id":req.params.id},function(err,contact){
     res.status(200).send(contact);
   });
}

exports.createContact = function(req,res){
  // console.log(req.body);
  var newContact = new Contact;
  newContact.name = req.body.name;
  newContact.address = req.body.name;
  newContact.name = req.body.name;
  newContact.created_by = req.body.created_by;
  newContact.phoneno = req.body.phoneno ;

  newContact.save(function(err,savedContact){
    if(err){
      res.status(400).send('Error occurred while creating contact');
    }else{
      console.log(savedContact);
      res.status(201).send('contact created successfully');
    }
  })

};

exports.getContact=function(req,res){
   Contact.find({"created_by":req.query.created_by},function(err,contacts){
     res.status(200).send(contacts);
   })
};

exports.updateContact = function(req,res){
  console.log(req.body);
  var id=req.params.id;
  Contact.findOne({"_id":id},

       function(err,contact){
                  if(err){
                    res.status(404).send("Error Occurred");
                  }
                  else{
                       if(!contact){
                           res.status(404).send("No bookmark found with id "+id);
                         }
                       else{
                         contact.name = req.body.name;
                         contact.address = req.body.address;
                         contact.phoneno = req.body.phoneno

                         contact.save(function(err,updatedContact){
                                   if(err){
                                     res.status(500).send("Error Occurred while updating record");
                                   }
                                   else{
                                     res.status(200).send(updatedContact);
                                   }
                                 });
                       }
                      }
                });
}

exports.deleteContact = function(req,res){
  // console.log(res.params.id);
  var id=req.params.id;
  // console.log(id);
  console.log(req.body);
  console.log(req.params.id);
  Contact.findOne({"_id":id},
  function(err){
                if(err){
                    console.log("Error : "+err);
                    return res.status(404).send("Contact not found");
                    }
                return res.status(200).send("Contact deleted Successfully");
               });
}
