const express = require('express')
const app = express()
const bodyParser=require("body-parser");
const date =require(__dirname+"/date.js");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
const items=["Buy food", "cook food"];
const workItems=[];

app.get("/", (req, res) => {

  const today = date.getDay();

  res.render("list", {kindOfDay: today ,kindOfMission: items});
})

app.post('/', (req, res) => {

const item=req.body.fn;
if (req.body.list ==="Work") {
  workItems.push(item);
  res.redirect("/work");
} else {
   items.push(item);
   res.redirect("/");
}


  });

app.get("/work", (req, res) => {
res.render("list", {kindOfDay: "Work List" ,kindOfMission: workItems});
});

app.get("/about", (req, res) => {
res.render("about");
});

app.listen(3000, function () {
  console.log(`Example app listening on port 3000`)
});
