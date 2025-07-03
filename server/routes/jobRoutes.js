import express from "express";
import { createJob, getJobs, deleteJobs } from "../controllers/jobController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get('/all-jobs', getJobs); // public 

router.post('/create-job', protect,  createJob); // authenticated users only

router.delete('/delete-job', protect, deleteJobs )
export default router;