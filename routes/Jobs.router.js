const express = require("express");
const { createJobs, getAllJobs, deleteJob, getJobById, updateJob } = require("../controllers/Job.controller");


const JobRouter = express.Router();

// Routes 
JobRouter.post("/jobs", createJobs);
JobRouter.get("/jobs",getAllJobs);
JobRouter.get("/jobs/:id", getJobById);
JobRouter.delete("/jobs/:id",deleteJob);
// JobRouter.put("/jobs:/id",updateJob)



module.exports = JobRouter;