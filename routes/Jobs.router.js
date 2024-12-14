const express = require("express");
const createJobs = require("../controllers/Job.controller");


const JobRouter = express.Router();

JobRouter.post("/create", createJobs);



module.exports = JobRouter;