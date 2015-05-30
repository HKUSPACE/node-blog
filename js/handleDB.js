var db = require('mysql');
var connection = db.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "blog"
});
module.exports = {
   add_status: function(title, content, res) {
      var query = "insert into posts (title,content) values ('" + title + "','" + content + "')";
console.log(query);
      connection.query(query, function (err, rows) {
         if (err) {
            console.log("Connot execute");
         }
         else {
            res.end('done');
         }
      });
   }
};
