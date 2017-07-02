var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var db=require('./models/db.js');

var user=require('./routes/user.js');
var tag=require('./routes/tag.js');
var bookmark=require('./routes/bookmark.js');
var contact = require('./routes/contact.js');
var note = require('./routes/note.js');

var jwtSecret = 'createdByAkashToken291';

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(expressJwt({ secret: jwtSecret }).unless({ path: ['/','/signup','/login']}));

app.get('/',function(req,res){
   res.sendFile('index.html',{ root: __dirname });
});

app.post('/signup',user.signup);
app.post('/login',user.login,function(req,res){
    var token = jwt.sign({username: req.body.username}, jwtSecret);
    res.status(200).send({token: token,username: req.body.username});
});

// for tags
app.post('/tag',tag.createTag);
app.get('/tags',tag.getTags);

// for bookmarks
app.get('/bookmark/:id',bookmark.getBookmark);
app.get('/bookmarks',bookmark.getBookmarks);
app.post('/bookmark',bookmark.addBookmark);
app.put('/bookmark/:id',bookmark.updateBookmark);
app.delete('/bookmark/:id',bookmark.deleteBookmark);

// for contact
app.post('/contact',contact.createContact);
app.get('/contacts',contact.getContact);
app.get('/contact/:id',contact.getContactById);
app.put('/contact/:id',contact.updateContact);
app.delete('/contact/:id',contact.deleteContact);

// for notes

app.post('/note',note.createNote);
app.get('/notes',note.getNotes);
app.get('/note/:id',note.getNoteById);

var port = process.env.PORT || 3000;
var server=app.listen(port,function(req,res){
    console.log("Server started at http://localhost:"+port);
});
