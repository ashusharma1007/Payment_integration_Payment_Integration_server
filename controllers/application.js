const ApplicationDB = require("./../models/application");
const ErrorResponse = require("./../utils/errorResponse");

const registerApplication = async (req, res, next) => {
    const { name, address, mobile, aadhar, license,pan, userId, jobId, location, clientName, jobName} = req.body;
  
    if (!name|| !address|| !mobile|| !aadhar|| !license|| !pan|| !userId||!jobId||!location||!clientName||!jobName) {
      //sending error
      return next(new ErrorResponse("please provide all details", 400));
    }
  
    try {
  
      const application = await ApplicationDB.create({
        name, 
        userId, 
        jobId,
        address, 
        mobile, 
        aadhar, 
        license,
        pan,
        status:'applied',
        location, 
        clientName, 
        jobName,
        date: new Date()
      });
  
      res.status(201).json({
        success: true,
        application
    })

  
    } catch (error) {
      //sending error
      next(error);
    }
  };

  const AllApplications = async(req, res, next) =>{

    const userId = req.params.userId;

    if (!userId) {
      //sending error
      return next(new ErrorResponse("No userID mentioned", 400));
    }
  
    try{

        const AllApplication = await ApplicationDB.find( {userId} );


        res.status(200).json({
            success:true,
            AllApplication
        })
    }
    catch(error){
      next(error);
    }
}
const AdminApplications = async(req, res, next) =>{

    try{

        const allApplications = await ApplicationDB.find( );


        res.status(200).json({
            success:true,
            allApplications
        })
    }
    catch(error){
      next(error);
    }

}
module.exports = {registerApplication, AllApplications, AdminApplications};