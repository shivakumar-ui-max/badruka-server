const express = require("express");
const User = require("../model/schema.mode");
const register = express.Router();

register.post("/registration", async (req, res) => {
   const { details, response } = req.body;
   const payment = {
      paymentId: response.razorpay_payment_id,
      orderId: response.razorpay_order_id,
   };
   const registerDb = {
      ...details,
      ...payment,
   };
   try {
      const user = await User.create(registerDb);
      if (user) {
         res.json("created successfully in database");
      }
   } catch (error) {}
   console.log(registerDb);
});

module.exports = register;
