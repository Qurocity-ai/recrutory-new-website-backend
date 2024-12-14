const Jobs = require("../models/Jobs.model")

// Create Jobs 
const createJobs = async(req,res)=>{
   try {
     const newJob = new Jobs(req.body);
     await newJob.save();
     res.status(200).json({msg:"Job Create succesfully!"})
   } catch (error) {
    res.status(400).json({msg:"Error Creating Jobs!"})
   }
}

module.exports = createJobs;