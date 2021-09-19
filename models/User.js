const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const crypto = require("crypto")

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required:[true, "Please provide a username"],   
        unique:true

    },

    PhoneNumber: {
        type: String,
        required:[true, "Please provide a address"]

    },

    // email: {
    //     type:String,
    //     required:[true, "Please provide a email"],
    //     unique:true,
    //     match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //        , "Please provide a valid email"]
    // },
    password: {
        type:String,
        required:[true, "Please provide a password"],
        minlength:6,
        select:false,
    },
    
    resetPasswordToken: String,
    resetPasswordExpire:Date

});

//before saving
userSchema.pre("save", async function(){

    //if the password is not changed
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});

//for checking password during login
userSchema.methods.matchPasswords = async function(password){
return await bcrypt.compare(password,this.password);
}

//for getting a signed token for password reset
userSchema.methods.getSignedToken = function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

userSchema.methods.getResetPasswordToken = function() {
    const resetToken = crypto.randomBytes(20).toString("hex");    
    return resetToken;
}
const User = mongoose.model("User", userSchema); 

module.exports = User;