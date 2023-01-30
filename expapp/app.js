const express = require("express");
const app = express();

app.get("/", (req, res)=>{
  res.send("Hello World!");
});

app.get("/about", (req, res)=>{
  res.send("About page");
});

app.get("/contact-us", (req, res)=>{
  res.send("Contact Us!");
});

app.listen(8000, ()=>{
  console.log("listening to port 8000")
});