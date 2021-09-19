const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken')
// const crypto = require("crypto")
const ClientDBSchema = new mongoose.Schema({

    clientId: {
        type: String,
        required:[true, "Please provide a username"],   
    },
    name: {
        type: String,
        required:[true, "Please provide a address"]
    },
    org: {
        type: String,
        required:[true, "Please provide a address"]

    },
   
    phone: {
        type: String,
        required:[true, "Please provide a address"]

    },
    status: {
        type: String,
        required:[true, "Please provide a address"]

    },
  

});
const ClientDB = mongoose.model("ClientDB", ClientDBSchema); 

module.exports = ClientDB;