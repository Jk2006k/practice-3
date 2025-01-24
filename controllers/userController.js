const User=require("../models/userModels")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const Signup=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const exituser=await User.findOne({email});
        if(exituser){
            return res.status(400).send("User already exits")
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const newUser=new User({email,password:hashedpassword})
        await newUser.save();
        res
            .status(201)
            .json({message:"User created succesfully",data:newUser})
        
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

const login =async(req,res)=>{
    try{
        const{email,password}=req.body;
        const exituser=await User.findOne({email});
        if(!exituser){
            return res.status(404).send("User does not exits")

        }
        const isMatch=await bcrypt.compare(password,exituser.password);
        if (!isMatch){
            return res.status(500).send("Invalid User")
        }
        const token=await jwt.sign({_id:exituser._id,email:exituser.email},"secret",{expiresIn:"1h"})
        return res.status(200).json({message:"Login Sucessfull",token})



    }catch(error){
        return res.status(404).send("Login error")

    }

}

module.exports={login,Signup};
