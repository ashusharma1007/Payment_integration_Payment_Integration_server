const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken')
// const crypto = require("crypto")
const ApplicationSchema = new mongoose.Schema({
    jobId:{
        type: String,
        required:[true, "Please provide jobId"],   
    },
    clientName:{
        type: String,
        required:[true, "Please provide userId"],   
    },
    jobName:{
        type: String,
        required:[true, "Please provide userId"],   
    },
    date:{
        type: Date,
        required:[true, "Please provide userId"],   
    },
    location:{
        type: String,
        required:[true, "Please provide userId"],   
    },
    userId:{
        type: String,
        required:[true, "Please provide userId"],   
    },
    name: {
        type: String,
        required:[true, "Please provide a name"],   
    },
    address: {
        type: String,
        required:[true, "Please provide a address"]
    },
    mobile: {
        type: String,
        required:[true, "Please provide a mobile"]

    },
    aadhar: {
        type: String,
        required:[true, "Please provide aadhar"]

    },
    license: {
        type: String,
        required:[true, "Please provide license card"]

    },

    pan: {
        type: String,
        required:[true, "Please provide a pan"]
    },
    status: {
        type: String,
        required:[true, "Please provide a status"]
    }

});
const ApplicationDB = mongoose.model("ApplicationDB", ApplicationSchema); 

module.exports = ApplicationDB;