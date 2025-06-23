import mongoose from "mongoose"

import dotenv from "dotenv"

dotenv.config();

const DB_URL = process.env.DB_URL

const connectToMongo = async () => {
  try {
    
    await mongoose.connect(DB_URL,{});
    console.log("DB Connect");
  } catch(error) {
     connect.error("Faild to connect", error)    
  }
}

export default connectToMongo;