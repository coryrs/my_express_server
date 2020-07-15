//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Local Server</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me at coryrischsmith1201@gmail.com")
});

app.get("/about", function(req, res){
  res.send("My name is Cory Risch-Smith, I am a Full-Stack Web Developer and am currently studying Design with an emphasis on Front-end and UX/UI at UC Davis. I love coffee and code. I also love music and love being outside on my free-time. ")
});

app.listen(3000, function(){
  console.log("Server started on port 3000.")
});

app.get("/hobbies", function(req, res){
  res.send("Coding, RockClimbing, Drinking coffee, meditation, Fishing/Camping/Hiking")
});
