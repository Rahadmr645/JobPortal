import JWT from 'jsonwebtoken'
import User from '../models/User.js'
import dotenv from 'dotenv'
dotenv.config();
export const protect = async (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if(!token) return res.status(401).json({message: 'Unauthorized'});

    try {
        const decoded = JWT.verify(token, process.env.SECRETE_KEY);
        req.user = await User.findById(decoded.id).select("-password");
        next();
    } catch (error) {
        res.status(401).json({message: "Token failed"})
    }
};