const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken')
// const crypto = require("crypto")
const transactionDBSchema = new mongoose.Schema({

    Payment_ID: {
        type: String,
        required:[true, "Payment_ID"],   
    },
    value: {
        type: String,
        required:[true, "value"]
    },
    currency: {
        type: String,
        required:[true, "currency"]

    },
    Item: {
        type: String,
        required:[true, "item"]

    }

});
const transactionDB = mongoose.model("transactionDB", transactionDBSchema); 

module.exports = transactionDB;