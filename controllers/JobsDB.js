const JobsDB = require("./../models/JobsDB");
const ErrorResponse = require("./../utils/errorResponse");

const registerJob = async (req, res, next) => {
    const { clientId, clientName, jobName,timings,gender,shift, status, location, salary, JobID, JobType} = req.body;
  
    if (!clientId||!clientName||!jobName||!timings||!gender||!JobType) {
      //sending error
      return next(new ErrorResponse("please provide an (clientID/ ClientName/ jobname)", 400));
    }
  
    try {
  
      const job = await JobsDB.create({
        clientId,
        clientName,
        jobName,
        timings,
        gender,
        shift,
        status,
        location,
        salary,
        JobID,
        JobType

       
      });
  
      res.status(201).json({
        success: true,
        job
    })

  
    } catch (error) {
      //sending error
      next(error);
    }
  };

  const AllDeliveryJobs = async(req, res, next) =>{

    try{

        const alldeliveryJobs = await JobsDB.find( { JobType : "delivery" } );
        res.status(200).json({
            success:true,
            alldeliveryJobs
        })
    }
    catch(error){
      next(error);
    }

}
const CityDelhiJobs = async(req, res, next) =>{

  try{

    const alldelhiJobs = await JobsDB.find( { location : "Delhi" } );
    res.status(200).json({
        success:true,
        alldelhiJobs
    })
}
catch(error){
  next(error);
}
}
const CityMumbaiJobs = async(req, res, next) =>{

  try{

    const allMumbaiJobs = await JobsDB.find( { location : "Mumbai" } );
    res.status(200).json({
        success:true,
        allMumbaiJobs
    })
}
catch(error){
  next(error);
}
}
const AllDrivingJobs = async(req, res, next) =>{

  try{

      const alldrivingJobs = await JobsDB.find( { JobType : "driving" } );


      res.status(200).json({
          success:true,
          alldrivingJobs
      })
  }
  catch(error){
    next(error);
  }

}
const AllFemaleJobs = async(req, res, next) =>{

    try{

        const allFemaleJobs = await JobsDB.find( { gender : "female" } );


        res.status(200).json({
            success:true,
            allFemaleJobs
        })
    }
    catch(error){
      next(error);
    }

}
const JobDetails = async(req, res, next) =>{

  const JobID = req.params.JobID;
  if (!JobID) {
      //sending error
      return next(new ErrorResponse("No Job ID mentioned", 400));
    }
  
    let job;
  
    try {
      job = await JobsDB.findOne({ JobID });
  
      if (!job) {
          //sending error
          return next(
            new ErrorResponse("No job with that ID", 401)
          );
      }
  
    } catch (error) {
      //sending error
      next(error);
    }
  
    res.status(200).json({
      success: true,
      job,
    });

}

module.exports = {CityMumbaiJobs,CityDelhiJobs,AllFemaleJobs,AllDrivingJobs,AllDeliveryJobs,registerJob,JobDetails};