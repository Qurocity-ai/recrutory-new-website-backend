const express = require('express');
const { applyForJob } = require('../controllers/Candidate.controller');
const router = express.Router();


router.post('/apply/:jobId', applyForJob);

module.exports = router;
