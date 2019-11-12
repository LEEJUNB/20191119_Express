import express from "express"
const app = express();
const PORT = 4000;

const listen = () => console.log(`listening port : ${PORT}`);
const handle = (req,res) => res.send('Profile Page');
const funcGet = (req,res) => res.send('Wellllllll??');

app.get('/',funcGet);
app.get('/profile',handle);

app.listen(PORT,listen);