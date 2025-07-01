import express from "express"
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors'
import connectToMongo from './config/db.js'
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from './routes/jobRoutes.js'
import adminRoutes from './routes/adminRoutes.js';
const app = express();

const port = process.env.port;
export const DB_URL = process.env.DB_URL;


app.use(express.json())
connectToMongo();
app.use(cors());


// routes section
app.use('/api/user', userRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/admin', adminRoutes)
app.use("/", (req, res) => {
  res.send('well come')
})



app.listen(port, '0.0.0.0', () => {
  console.log(`Your app is running on http://localhost:${port}`)
})