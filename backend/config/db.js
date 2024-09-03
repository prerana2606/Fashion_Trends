const { bgGreen } = require("colors");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB=async(req,res)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        // res.status(200).send({
        //     message:'Database connected'
        // })
        console.log("Database is connected".bgGreen.white);

    }catch(error){
        // res.status(504).send({
        //     message: `Internal Server Error ${error}`,
        //     success:false,
        //     description: `Database not connected`,
        // })
        console.log(`Error occured ${error}`.bgRed.white);
    }
}
module.exports = connectDB;
