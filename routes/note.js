var mongoose = require( 'mongoose' );
// var Contact = mongoose.model( 'Contact' );
 var Note = mongoose.model( 'Note' );

exports.getContactById=function(req,res){
  // console.log(req.query);
   Contact.findOne({"_id":req.params.id},function(err,contact){
     res.status(200).send(contact);
   });
}

exports.createNote = function(req,res){
  console.log(req.body);
  var note = new Note;
  note.title = req.body.title;
  note.description = req.body.description;
  note.content = req.body.content;
  note.created_by = req.body.created_by;
  note.created_at = req.body.created_at ;

  note.save(function(err,savedNote){
    if(err){
      res.status(400).send('Error occurred while creating contact');
    }else{
      console.log(savedNote);
      res.status(201).send(savedNote);
    }
  })

};

exports.getNotes=function(req,res){
   Note.find({"created_by":req.query.created_by},function(err,Notes){
     res.status(200).send(Notes);
   })
};

exports.getNoteById=function(req,res){
  // console.log(req.query);
   Note.findOne({"_id":req.params.id},function(err,note){
     res.status(200).send(note);
   });
}
