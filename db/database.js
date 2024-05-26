const mongoose = require("mongoose");
const URI = `mongodb+srv://shiva:${process.env.PASS}@bbcit.e9msohs.mongodb.net/Registration?retryWrites=true&w=majority&appName=BBCIT`;
const connectDB = async () => {
   try {
      await mongoose.connect(URI, { serverSelectionTimeoutMS: 5000 });
      console.log("data base connected sucessfully");
   } catch (error) {
      console.log("database connection failed!");
   }
};

module.exports = connectDB;
