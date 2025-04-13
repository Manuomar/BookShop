import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
    name:{
        type:String,
        required : true,
    },
    title:{
        type:String,
        required : true,
    },
    category:{
        type:String,
        required : true,
    },
    price:{
        type:Number,
        required : true,
    },
   Image:{
        type:String,
        required : true,
    }

},{timestamps:true})

export const Books = mongoose.model("Books",booksSchema);