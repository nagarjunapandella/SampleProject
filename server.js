var express=require('express');
var app=express();
var PORT=3000;

var middleware=require('./middleware.js')
app.use(middleware.logger);
app.get("/about",middleware.requireAuthentication, function(req,res){
 res.send('Hello Bitapps.... Here is nagarjuna');
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT,function(){
	console.log("express server is started...on port"+PORT);
});