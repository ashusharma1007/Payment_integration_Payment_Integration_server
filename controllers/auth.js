//we will create controller fuctions for all the routes in this file
const User = require("./../models/User");
const ErrorResponse = require("./../utils/errorResponse");

const crypto = require("crypto")
const bcrypt = require("bcryptjs");


const register = async (req, res, next) => {
  const { username, PhoneNumber, password } = req.body;

  if (!username||!PhoneNumber||!password) {
    //sending error
    return next(new ErrorResponse("please provide an (email/ password/ username)", 400));
  }

  try {

    const user = await User.create({
      username,
      PhoneNumber,
      password,
     
    });

    sendToken(user, 201, res);

  } catch (error) {
    //sending error
    next(error);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    //sending error
    return next(new ErrorResponse("please provide an username and password", 400));
  }

  //now to check if the user already exist or not!!
  try {
    const user = await User.findOne({ username }).select("password").select("username");

    if (!user) {
      //sending error
      return next(
        new ErrorResponse("invalid username", 401)
      );
    }

    //checking if password match
    const isMatch = await user.matchPasswords(password);

    if (!isMatch) {
      //sending error
      return next(
        new ErrorResponse("wrong password"),
        401
      );
    }

    sendToken(user, 200, res, user.username);
  } catch (error) {
    //sending error
    next(error);
  }
};

//A fuction to send mail with password reset link
const sendToken = (user, statusCode, res, PhoneNumber) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token, PhoneNumber });
};
module.exports = { register, login };
