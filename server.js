var express=require('express');
var bodyParser=require("body-parser");
ejs = require('ejs');
var db = require('./js/handleDB');
var app=express();
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/js'));
app.locals = {
   title: 'HKUSPACE BLOG'
};
require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({ extended:false }));
app.post('/addpost',function(req,res){
   console.log(req.body.title);
   var title=req.body.title;
   var content=req.body.content;
   console.log("Title = "+title+", Content is "+content);
   db.add_status(title, content, res);
   res.end('done');
});
var server=app.listen(3000,function() {
   console.log("Express is running on port 3000");
});