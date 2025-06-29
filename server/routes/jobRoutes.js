import express from "express";
import { createJob, getJobs } from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";
import  rahadMiddle  from "../middleware/rahadMiddle.js";
const router = express.Router();

router.get('/all-jobs', getJobs); // public 

router.post('/create-job', protect,  createJob); // authenticated users only


export default router;