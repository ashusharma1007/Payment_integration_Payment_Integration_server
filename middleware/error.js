//middleware that handles errors 
const ErrorResponse = require("./../utils/errorResponse");


const errorHandler = (err, req, res, next) =>{

    let error = {...err};
    error.message= err.message;

    //duplicate field value entered error
    if(err.code === 11000){
     const message = "Duplicate field value entered";
     error = new ErrorResponse(message, 400); //bad request

    }

    if(err.name ==="ValidationError"){
        const message = Object.values(err.errors).map((val)=>val.maeesage)
        error = new ErrorResponse(message, 400); //bad request
   
       }

       res.status(error.statusCode|| 500).json({
           success:false,
           error:error.message||"Server Error"
       });
}


module.exports = errorHandler;