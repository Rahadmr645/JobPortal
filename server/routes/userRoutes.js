import express  from "express";
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import JWT from "jsonwebtoken"




const router = express.Router();

router.get("/create", async (req,res) => {
  
  try {
    const { name, email, password} = req.body;
    
    if(!name  || !email  || !password) return res.status(400).json({message:"You have to fill all the input"})
  
    const exist = await User.findOne({email})
    
    if(exist) return return res.status(400).json({message:"user already exist"})
    
    const salt = await bcrypt.genSalt(10);
    const hassPass = await bcrypt.hash(password,genSalt)
    
     const newUser = new User({
       name,
       email,
       password: hassPass,
     });
     
     await newUser.save();
     
     res.status(200).json({message:"user create successfull", user:newUser})
  }
})