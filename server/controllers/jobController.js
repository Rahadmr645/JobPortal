import Job from "../models/Job.js";

// post /api/jobs -create job
export const createJob = async (req, res) => {
    const { title, description, company, location, type } = req.body;

    if (!title || !description || !company || !location) return res.status(400).json({ message: "All fields are required" });

    const job = new Job({
        title,
        description,
        company,
        location,
        type,
        createdBy: req.user._id,
    });

    const createdJob = await job.save();
    res.status(201).json(createdJob);
}

// get api/jobs - all jobs
export const getJobs = async (req, res) => {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs)
}