const mongoose = require("mongoose");

// Store Data in JobsSchema => 
const JobSchema = mongoose.Schema(
    {
        JobTitle: {
            type: String,
            required: true,
        },
        Company: {
            type: String, 
            required: true,
        },
        Location: {
            type: String,
            required: true,
        },
        JobType:{
            type: String,
            required: true,
        },
        CTC: {
            type: String,
            required: true,
        },
        Experience: {
            type: String,
            required: true,

        },
        noticperiod: {
            type: String,
            default: "Immediate"
        },
        description: {
            type: String,
        },
        qualification: {
            type: String,
            required: true
        },
        expectations: {
            type: String,
        },
        // Here we will make relationship with candidate Model 
        // Using ref or id 
        interestedcandidate: {
            type: Array,
            default: []
        },
        // interestedcandidate:[]
        dateposted: {
            type: String,
        },
        validitydate: {
            type: String,
        }

    },
    { timestamps: true });


const Jobs = mongoose.model("Job", JobSchema);

// Jobs Model => 
module.exports = Jobs;
