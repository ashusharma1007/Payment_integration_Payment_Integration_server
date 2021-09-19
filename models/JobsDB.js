const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken')
// const crypto = require("crypto")
const JobsDBSchema = new mongoose.Schema({

    clientId: {
        type: String,
        required:[true, "Please provide a username"],   
    },
    clientName: {
        type: String,
        required:[true, "Please provide a address"]
    },
    jobName: {
        type: String,
        required:[true, "Please provide a address"]

    },
    timings: {
        type: String,
        required:[true, "Please provide a address"]

    },
    gender: {
        type: String,
        required:[true, "Please provide a address"]

    },

    shift: {
        type: String,
        required:[true, "Please provide a address"]
    },
    status: {
        type: String,
        required:[true, "Please provide a address"]
    },
    location: {
        type: String,
        required:[true, "Please provide a address"]
    },
    salary: {
        type: String,
        required:[true, "Please provide a address"]
    },
     JobID: {
        type: String,
        required:[true, "Please provide a address"]
    },
    JobType: {
        type: String,
        required:[true, "Please provide a address"]
    },

});
const JobsDB = mongoose.model("JobsDB", JobsDBSchema); 

module.exports = JobsDB;