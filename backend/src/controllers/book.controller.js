import { Books } from "../models/books.model.js";

const getBook = async(req,res)=>{
    try{
        const book = await Books.find()
        res.status(200).json(book)
    }
    catch(error){
        console.log("Error" ,error);
        res.status(500).json(error);
    }
}


export {getBook}