const express = require('express')
const app = express()
const port = 4000;

function handleListening(){
    console.log(`Listening on : http://localhost:${port}`);
}

function handleHome(req,res) {
    console.log("Homepage");
    res.send("Home Home!!");
}

app.get("/",handleHome);


app.listen(port, handleListening);