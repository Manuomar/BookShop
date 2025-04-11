import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js'
dotenv.config()
const app = express()


// testing the server
app.get('/',(req,res)=>{
    res.send("hello")
})

//Calling mongoDB Connection
connectDB();
// console.log(process.env.PORT)
const port = process.env.PORT ||5000;
app.listen(port,()=>{
    console.log("server is running in port :",port);
})