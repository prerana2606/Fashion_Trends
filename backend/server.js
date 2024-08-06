const express=require("express");
const colors=require("colors");
const dotenv=require("dotenv").config();
const morgan=require("morgan");
const rootroute=require("./routes/rootroute");
const { connect } = require("mongoose");
const connectDB=require("./config/db");

const PORT =  3000;
const app = express();
connectDB();

app.get("/",(req,res)=>{
    res.send("API is working");
});

app.use("/fashiontrends",rootroute);

app.listen(PORT,()=>{
    console.log(`Server is running on  http://localhost:${PORT}`.bgBlue.white);
});