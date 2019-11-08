import express from "express";
const app = express();
const PORT = 3000;

const Listening = () => console.log(`Listening on : http://localhost:${PORT}`);
const Home = (req,res) => {
    console.log("Homepage");
    res.send("Hello World Again Again Again!!");
};

const middle = (req,res,next) => {
    console.log("I'm groot");
    next();
};
app.use(middle);
app.get('/',Home);
app.listen(PORT,Listening);