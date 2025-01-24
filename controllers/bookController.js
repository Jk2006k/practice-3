const express=require("express");
const Book=require('../models/bookModels')

const createbooks=async(req,res)=>{
    try{
        const {title,author,genre,available,year}=req.body;
        
        const book =new Book({
            title,
            author,
            genre,
            available,
            year
        });
        await book.save();
        res.status(200).send("book added sucessfully");

    }catch(error){
        console.error(error.message)
        
    }
}

const getBooks=async(req,res)=>{
    try{
        const books=await Book.find();
        res.status(500).json({data:books});

    }catch(error){
        res.status(500).json({message:error.message});
    }

}

const getBooksById=async(req,res)=>{
    try{
        const id=req.params.id;
        const book=await Book.findById(id);
        if(!books){
            res.status(500).json({message:error.message});

        }
        res.status(500).json({message:error.message});

    }catch(error){
        res.status(500).json({message:error.message});
    }

}
const updateBooks=async(req,res)=>{
    try{
        const books=await Book.findByIdAndUpdate(req.params.id,req.body)



    }catch(error){
        res.status(500).json({message:error.message});

    }
}

const DeleteBooks=async(req,res)=>{
    try{
        const book =await Book.findByIdAndDelete(req.params.id)

    }catch(error){
        res.status(500).json({message:error.message});

    }
}

module.exports={createbooks,getBooks,getBooksById,updateBooks,DeleteBooks}

