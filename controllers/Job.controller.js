const Jobs = require("../models/Jobs.model");

// Get all jobs
const getAllJobs = async (req, res) => {
  try {
    const jobs = await Jobs.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ msg: "Error in Fetching Jobs!" });
  }
};

// Get job by ID
const getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Jobs.findById(id);
    if (!job) {
      return res.status(404).json({ msg: "Job not found!" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ msg: "Error in Fetching Job by ID!" });
  }
};

// Create a job
const createJobs = async (req, res) => {
  try {
    const jobData = { ...req.body, dateposted: getCurrentDate() };
    const newJob = new Jobs(jobData);
    await newJob.save();
    res.status(201).json({ msg: "Job created successfully!" });
  } catch (error) {
    res.status(400).json({ msg: "Error creating job!" });
  }
};

// Update a job
const updateJob = async (req, res) => {
  try {
    const { id } = req.params; // Access id from req.params
    const updatedJob = await Jobs.findByIdAndUpdate(id, req.body);
    if (!updatedJob) {
      return res.status(404).json({ msg: "Job not found!" });
    }
    res.status(200).json({ msg: "Job updated successfully!" });
  } catch (error) {
    res.status(400).json({ msg: "Error updating job!" });
  }
};

// Delete a job
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Jobs.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ msg: "Job not found!" });
    }
    res.status(200).json({ msg: "Job deleted successfully!" });
  } catch (error) {
    res.status(400).json({ msg: "Error deleting job!" });
  }
};

// getting current date
function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  return `${day} ${month} ${year}`;
}

// Exporting the functions together
module.exports = {
  getAllJobs,
  getJobById,
  createJobs,
  updateJob,
  deleteJob,
};
