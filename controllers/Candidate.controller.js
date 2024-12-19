const Candidate = require("../models/Candidate.model");
const Job = require("../models/Jobs.model");

// Creating Candidate and updating interestedCandidate 
const applyForJob = async (req, res) => {
    const { jobId } = req.params;
    const { name, email, location, currentCtc, expectedCtc, mobile, noticePeriod, qualification, resume } = req.body;

    try {
        // 1. Find the job by ID
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }

        // 2. Check if a candidate with the same name, email, or mobile already exists
        const existingCandidate = await Candidate.findOne({
            $or: [
                { email },
                { name },
                { mobile }
            ]
        });

        if (existingCandidate) {
            // 3. Check if the candidate already applied for this job
            const alreadyApplied = job.interestedcandidate.includes(existingCandidate._id);
            if (alreadyApplied) {
                return res.status(400).json({ message: 'You have already applied for this job.' });
            }
            
            // If the candidate exists but hasn't applied for this job yet, push their ID to the job's interestedcandidate array
            return res.status(400).json({ message: 'Duplicate entry: You have already applied for a job using this name, email, or mobile number.' });
        }

        // 4. If no matching candidate, create a new candidate
        const newCandidate = new Candidate({
            name,
            email,
            location,
            currentCtc,
            expectedCtc,
            mobile,
            noticePeriod,
            qualification,
            resume
        });

        const savedCandidate = await newCandidate.save();

        // 5. Add the new candidate's ID to the job's interestedcandidate array
        job.interestedcandidate.push(savedCandidate._id);
        await job.save();

        res.status(200).json({ message: 'Applied Successfully', candidate: savedCandidate, job });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




module.exports = {
    applyForJob
};
