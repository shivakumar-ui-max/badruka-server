require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const router = require("./routes/payment");
const route = require("./routes/user");
const register = require("./routes/registeration");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// CORS configuration
const options = {
   origin: "http://localhost:5173",
   credentials: true,
   methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(options));

// payment route
app.use("/api", router);
app.use("/auth", route, register);

// Connect to database and start server
connectDB().then(() => {
   app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
   });
});
