const mongoose = require("mongoose");

const connectDB = async()=>{
    mongoose.set('strictQuery', false);
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`MongoDB Connected`);
    }catch(err){
        console.log(`Error:${err.message}`);
        process.exit() ;
    }
};

module.exports = connectDB ;
