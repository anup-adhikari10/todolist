const bodyParser = require("body-parser");
const express = require("express");

const application=express();


let items = ["Buy food","Cook Food","Eat Food"];

application.set('view engine','ejs');

application.use(bodyParser.urlencoded({extended: true}));
application.use(express.static('public'));

application.get("/",function(req,res){

    let today=new Date();
    let options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    let day=today.toLocaleDateString('en-US',options);
    res.render("list",{kindOfDay:day,newListItems:items});

});

application.post("/",function(req,res){
    let item = req.body.newItem;
    items.push(item);
    res.redirect("/");

});

application.listen(3000,function(){
    console.log("Server is running on port 3000");
})