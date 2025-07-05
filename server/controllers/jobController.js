import Job from "../models/Job.js";
import User from "../models/User.js";
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



// Get all jobs
export const getJobs = async (req, res) => {
  try {
    // Fetch all jobs and populate the createdBy field with the user's name
    const jobs = await Job.find()
      .populate('createdBy', 'name')  // Populate with the user's name
      .sort({ createdAt: -1 });      // Sort jobs by createdAt in descending order

    res.status(200).json({ message: "Here are all the jobs", jobs });
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


// delete jobs
export const deleteJobs = async (req, res) => {

  try {
    const { id } = req.params;

    if (!id) return res.status(404).json({ message: "please inter the id" })

    await Job.findByIdAndDelete(id);
    res.status(200).json({ message: "job delete complate" });
  } catch (error) {
    res.status(500).json({ message: "faild to delete", error: error.message })
  }
}


// edit jobs
export const editJob = async (req, res) => {
  try {
    // use a id for find the job
    const { id } = req.params;
    
    const { title, description, company, location, type } = req.body;

    const updatedData = await Job.findByIdAndUpdate(id, { title, description, company, location, type }, { new: true })

    if (!updatedData) return res.status(404).json({ message: 'job not found' });

    res.status(200).json({ message: 'job update', Job: updatedData })

  } catch (error) {
      res.status(500).json({message:'faild to updata', error: error.message});
  }
}