const mongoose = require("mongoose");

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo DB Connected");
}

module.exports = connectDB;