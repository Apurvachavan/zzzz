const express=require('express');
const app =express();
app.get("/",function(req,res) {
    res.send("welcome to web");
    });
    app.get("/about",function(req,res){
       res.sendFile(__dirname+"/index.html");
    });
app.listen(5000,function(req,res){
    console.log("ur server is running");
});    
