const mongoose = require("mongoose");

// store data of candidate 
const CandidateSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    currentCtc:{
        type:Number,
        required:true
    },
    expectedCtc:{
        type:Number,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    noticePeriod:{
        type: String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true,
    }
},{timestamps:true});



// Model 
const Candidates = mongoose.model("Candidate",CandidateSchema);