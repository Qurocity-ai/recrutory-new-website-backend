const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    profile_image: { type: String }, // URL for profile picture
    total_experience: { type: String },
    proficiency: { type: String },
    professional_summary: { type: String },
    language_proficiency: {
        French: {
            level: String,
            certification: String,
            skills: {
                spoken: Number,
                vocabulary: Number,
                grammar: Number,
                fluency: Number
            }
        }
    },
    skills: [String], // Array of skills
    work_experience: [
        {
            company: String,
            role: String,
            responsibilities: [String]
        }
    ],
    certifications: [
        {
            name: String,
            level: String,
            institution: String
        }
    ],
    languages_spoken: [String], // List of languages (e.g., ["French", "English"])
});

const User = mongoose.model("User", userSchema);

module.exports = User;
