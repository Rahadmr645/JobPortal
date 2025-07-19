import express from "express";
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'
import dotenv from 'dotenv'
import validator from 'validator'
import isDisposableEmail from 'is-disposable-email';
import {protect }from '../middleware/authMiddleware.js'
import upload from '../middleware/imageMiddleware.js'
import { edithProfile } from "../controllers/userController.js";
dotenv.config();
const router = express.Router();


// 01: create routes
router.post("/create", async (req, res) => {

  try {
    const { name, email, password } = req.body;


    const missingFields = [];
    if (!name) missingFields.push("name");
    if (!email) missingFields.push("email");
    if (!password) missingFields.push("password");

    if (missingFields.length > 0) {
      return res.status(400).json({ message: `Please fill the input : ${missingFields.join(", ")}` })
    }

    // validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    };

    // chack for dispossable and fake emails
    if (isDisposableEmail(email)) {
      return res.status(404).json({ message: 'Dispossible email not allowd' })
    }
    const exist = await User.findOne({ email })

    if (exist) return res.status(400).json({ message: "user already exist" })

    const salt = await bcrypt.genSalt(10);
    const hassPass = await bcrypt.hash(password, salt)

    const newUser = new User({
      name,
      email,
      password: hassPass,
    });

    const token = JWT.sign({ name: newUser.name, id: newUser._id, email: newUser.email, location: newUser.location }, process.env.SECRETE_KEY, { expiresIn: '1d' })
    await newUser.save();
    res.status(200).json({ message: "user create successfull", user: newUser, token: token })
  } catch (error) {
    res.status(500).json({ message: 'Enternal erro', error: error.message })
  }
})

// 02: login routes
router.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "You have to fill all the input" })

    const exist = await User.findOne({ email })

    if (!exist) return res.status(400).json({ message: "user not  exist" })

    // compare the password
    const comparePass = await bcrypt.compare(password, exist.password);

    if (!comparePass) return res.status(404).json({ message: "invalid credintials" });

    const token = JWT.sign({ name: exist.name, id: exist._id, email: exist.email,location:exist.location }, process.env.SECRETE_KEY, { expiresIn: '1d' })

    res.status(200).json({ message: `you are wellcome ${exist.name}`, token: token })
  } catch (error) {
    res.status(500).json({ message: 'Enternal erro', error: error.message })
  };
})



// edith routes
router.put('/update', protect, upload.single('image'), edithProfile)




export default router;