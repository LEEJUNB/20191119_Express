import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

const app = express();

const handle = (req,res) => res.send('Profile Page');
const funcGet = (req,res) => res.send('Wellllllll??');

app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.get('/',funcGet);
app.get('/profile',handle);

export default app;