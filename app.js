//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const today = require(__dirname + "/date.js");

const app = express();

const items = ["Have some coffee"];
constmas schoolItems = [];

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req, res){

  let day = today.getDate();
  res.render('list', {listTitle:day, newListItems: items});

});

app.get("/school", function(req, res){
  let title = "School";
  res.render('list', {listTitle:title, newListItems: schoolItems});
});



app.post("/", function(req, res){

  let item = req.body.newItem;

  if(req.body.listbtn === "School"){
    schoolItems.push(item);
    res.redirect("/school");
  }else{
    items.push(item);
    res.redirect("/");
  }

});





app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});
