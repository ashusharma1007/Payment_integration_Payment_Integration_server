const transactionDB = require("../models/transactionDB");
const ErrorResponse = require("../utils/errorResponse");

const transactionProcess = async (req, res, next) => {
    const { Payment_ID, value, Item, currency} = req.body;
  
    if (!Payment_ID||!value||!Item||!currency) {
      //sending error
      return next(new ErrorResponse("please provide an (clientID/ ClientName/ jobname)", 400));
    }
  
    try {
  
      const transactionNew = await transactionDB.create({
        Payment_ID, value, Item, currency

       
      });
  
      res.status(201).json({
        success: true,
        transactionNew
    })

  
    } catch (error) {
      //sending error
      next(error);
    }
  };

  const transactionDetails = async(req, res, next) =>{

    try{

        const alltransactions = await transactionDB.find( { currency : "USD" } );
        res.status(200).json({
            success:true,
            alltransactions
        })
    }
    catch(error){
      next(error);
    }

}

module.exports = {transactionDetails,transactionProcess};