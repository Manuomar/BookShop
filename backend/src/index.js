import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js'
import cors from 'cors';

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())  // parsing the data
// testing the server
app.get('/',(req,res)=>{
    res.send("hello")
})

//importing routers
import bookRoute from './routers/book.route.js' 
import UserRoute from './routers/user.route.js'
import contactRoute from './routers/contact.route.js'




//Calling mongoDB Connection
connectDB();

// calling routes
app.use('/book',bookRoute);
app.use('/user',UserRoute);
app.use('/contact',contactRoute);

// console.log(process.env.PORT)
const port = process.env.PORT ||5000;
app.listen(port,()=>{
    console.log("server is running in port :",port);
})