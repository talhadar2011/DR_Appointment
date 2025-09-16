import jwt from "jsonwebtoken"
import doctorModel from "../models/doctorModel.js"

export const getDoctors=async(req,res)=>{
    try{
        const Doctors= await doctorModel.find()
        res.status(200).json({message:"All Doctor Fetched",Doctors})
    }
    catch(err){
        res.status(400).json({message:err})
    }
}
export const addDoctor=async(req,res)=>{
    const { name,
        email,
        image,
    specialization,
    age,
    yearsOfExperience ,
    degrees,rating,
    appointmentSlots} =req.body
    if(!name||!email||!specialization||!age||!yearsOfExperience||!degrees||!rating)
    {
        res.status(400).json({message:"DataMissing"})
    }
    const doctorexist=await doctorModel.findOne({email})
    if(doctorexist)
    {
        res.status(400).json({message:"Doctor already exisit with the given E-Mail Address"})
    }
    const newDoctor= new doctorModel({name,email,image,specialization,age,yearsOfExperience,degrees,rating,appointmentSlots})
    newDoctor.save()
    res.status(200).json({message:"Doctor Added",name,specialization,age});
}

