const ClientDB = require("../models/ClientId");
const ErrorResponse = require("./../utils/errorResponse");
const registerClient = async (req, res, next) => {
    const { clientId, name, org,phone,status} = req.body;
  
    if (!clientId||! name||!org||!phone) {
      //sending error
      return next(new ErrorResponse("please provide an (clientID/ ClientName/ jobname)", 400));
    }
  
    try {
  
      const client = await ClientDB.create({
        clientId, name, org,phone, status

       
      });
  
      res.status(201).json({
        success: true,
        client
    })

  
    } catch (error) {
      //sending error
      next(error);
    }
  };
  const allClients = async(req, res, next) =>{

    try{

        const ClientsData = await ClientDB.find( { status : "active" } );


        res.status(200).json({
            success:true,
            ClientsData
        })
    }
    catch(error){
      next(error);
    }

}
  module.exports = {registerClient,allClients};