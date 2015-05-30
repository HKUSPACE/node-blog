var db = require('mysql');
var connection = db.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "blog"
});
module.exports=function(app) {
   app.get('/post',function(req,res) {
      connection.query('select * from posts', function(err, result) {
         if(!err) {
            res.render('index.ejs', {data: result});
         }
      });
   });
   app.get('/post/view/:id',function(req,res) {
      var id = req.params.id;
      console.log('select * from posts where id='+id);
      connection.query('select * from posts where id='+id, function(err, result) {
console.log(result);
         if(!err) {
            res.render('view.ejs', {data: result});
         }
      });
   });
   app.get('/post/add',function(req,res) {
      res.render('add.ejs');
   });

}