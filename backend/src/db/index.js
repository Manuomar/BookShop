import mongoose from "mongoose";
// import { DB_Name } from "../constants.js";

const connectDB = async()=>{
    try{
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/BookShop`)
        console.log(`\n MongoDB connected \n DB host :${connectInstance.connection.host}`);
    }catch(error){
        console.log('mongoDB connection error',error);
        process.exit(1)
    }
}

export default connectDB;