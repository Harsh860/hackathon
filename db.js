var mysql=require('mysql');

var connection = mysql.createConnection({

  host : 'localhost',
  user : 'root',
  password: 'harsh',
  database: 'user',


})
connection.connect(function(err){


  if(err){
    console.log("err");


  }
  else
  console.log("database connected!");
})
module.exports = connection;
