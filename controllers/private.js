//to access private data after logIn
const User = require("./../models/User");
const ErrorResponse = require("./../utils/errorResponse");

exports.getPrivateData = async (req, res, next) => {
  const username = req.params.username;

  if (!username) {
    //sending error
    return next(new ErrorResponse("No username mentioned", 400));
  }

  let user;

  try {
    user = await User.findOne({ username }).populate('-password');

    if (!user) {
        //sending error
        return next(
          new ErrorResponse("user does not exist", 401)
        );
    }

  } catch (error) {
    //sending error
    next(error);
  }

  res.status(200).json({
    success: true,
    user,
  });
};
