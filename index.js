const express = require("express");
const app = express();
const PORT = 3000;
app.get('/', function(req,res){
    console.log(`Listenning port : ${PORT}`)
    res.send("Hello World Again")
});
app.listen(PORT);