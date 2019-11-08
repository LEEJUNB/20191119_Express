import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router.js";

const app = express();

const Home = (req,res) => {
    console.log("Homepage");
    res.send("Hello World Again Again Again!!");
};
const Profile = (req,res) => res.send("Profirerere!!!");

const middle = (req,res,next) => {
    console.log("I'm groot");
    next();
};
app.use(middle);
app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan("dev"));

app.get('/',Home);
app.get('/profile',Profile);
app.use('/user',userRouter);

export default app;