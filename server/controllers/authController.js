import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";



export const registerUser = async(req,res)=>{
    const {name,password,email}= req.body;
    try{
        //if any field is missing
        if(!name || !password || !email){

            return res.status(400).json({message:"Please fill all the fields"});
        }
        //check if user already exists
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message:`user already exists with email ${email}`
            })
        }
        //hash password
        const hashpassword=await bcrypt.hash(password,10);
        //create new user
        const newUser= new userModel({name,email,password:hashpassword});
        await newUser.save();
        const accessToken= jwt.sign(
            {
                user:{id:newUser._id,name:newUser.name,email:newUser.email}
            },
            process.env.JWT_SECRET, );
        res.cookie("accessToken",accessToken,{
            httpOnly:true,      
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:24*60*60*1000, //1 day
        });


        res.status(200).json({message:"Register User",name,password,email});
    }
    catch(error){
        console.log(error);
    }
}

export const loginUser= async(req,res)=>{
    const {email,password}= req.body;
    try{
        //if any field is missing
        if(!password || !email){    
            return res.status(400).json({message:"Please fill all the fields"});
        }
        //check if user already exists
        const existingUser=await userModel.findOne({email});
        if(!existingUser){
            return res.status(400).json({
                message:`No user found with email ${email}`
            })
        }
        //compare password
        const isMatch= await bcrypt.compare(password,existingUser.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid credentials"});
        }
        const accessToken= jwt.sign(
            {
                user:{id:existingUser._id,name:existingUser.name,email:existingUser.email}
            },
            process.env.JWT_SECRET, );
        res.cookie("accessToken",accessToken,{
            httpOnly:true,      
            secure:process.env.NODE_ENV==="production",
            sameSite:"strict",
            maxAge:24*60*60*1000, //1 day
        }); 
        res.status(200).json({message:"Login Successful"});
    }
    catch(error){
        console.log(error);
    }
}


