const mongoose = require("mongoose");

// Define the schema for candidates
const CandidateSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    currentCtc: {
        type: Number,
        required: true
    },
    expectedCtc: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    noticePeriod: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// Model 
const Candidate = mongoose.model("Candidate", CandidateSchema);

module.exports = Candidate;
