import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Fullname :{
        type : String,
        required : true,
    },
    Email:{
        type : String,
        required : true,
        lowercase : true,
        unique:true
    },
    Password :{
        type :String,
        required:true
    }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);