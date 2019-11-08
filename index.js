import express from "express";
const app = express();
const PORT = 3000;

function Listening(){
    console.log(`Listening on : http://localhost:${PORT}`);
}

function Home(req,res){
    console.log("Homepage");
    res.send("Hello World Again Again Again!!");
};
app.get('/',Home);
app.listen(PORT,Listening);