const express = require("express");
const app = express();
const body = require("body-parser");

app.set("view engine" , "ejs");




app.get("/" , function(req,res){
	res.render("register");
});


app.get("/login" , function(req,res){
	res.render("login");
});

app.get("/register" , function(req,res){
	res.render("register");
});
app.get("/forgot" , function(req,res){
	res.render("forgot");
});
app.get("/reset" , function(req,res){
	res.render("reset");
});











app.listen(4000,function(){
	console.log("Started !!");
});