var express=require('express');
var app=express();
var PORT=3000;

var middleware={
	requireAuthentication:function(req,res,next){
     console.log("Private Authentication....");
     next();
	},
	logger:function(req,res,next){
     console.log(req.method +''+req.originalUrl);
     next();
	}
};
app.use(middleware.logger);
app.get("/about",middleware.requireAuthentication, function(req,res){
 res.send('Hello Bitapps....');
});

app.use(express.static(__dirname +'/public'));

app.listen(PORT,function(){
	console.log("express server is started...on port"+PORT);
});