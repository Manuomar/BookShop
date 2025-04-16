 import {Contact} from '../models/Contact.model.js'
 
 const getContact = async (req,res)=>{
    // res.status(200).json({
    //     message:"hello"
    // })
try{
    const {firstName , lastName , email ,message} = req.body;
    const createdContact = new Contact({
        firstName,
        lastName,
        email,
        message
    })
    createdContact.save();
    res.status(201).json({
        message:"new user created",
        user:{
          _id:createdContact._id,
          firstName:createdContact.firstName,
          lastName:createdContact.lastName,
          email:createdContact.email,
          message:createdContact.message
        }
    })
}catch(error){
    res.status(500).json({
         message:"internal server error"
    })
}
 }

export {getContact}