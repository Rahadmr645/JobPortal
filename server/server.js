import express from "express"
import  connectToMongo from './config/db.js'
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const port = process.env.port;
export const DB_URL = process.env.DB_URL;


app.use(express.json())
connectToMongo ();
app.use("/",(req,res) => {
  res.send('well come')
})



app.listen(port, () => {
  console.log(`Your app is running on http://localhost:${port}`)
})