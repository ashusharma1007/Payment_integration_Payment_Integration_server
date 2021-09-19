const mongoose = require("mongoose");


//db configure

const connectDB = async() =>{

mongoose.connect(process.env.db_connection_URL, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true
  });

  console.log("server is connected");
}

   
module.exports= connectDB;