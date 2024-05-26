const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();

const razorpay = new Razorpay({
   key_id: `${process.env.KEY_ID}`,
   key_secret: `${process.env.SECRET_KEY}`,
});

router.post("/payment", async (req, res) => {
   const { amount, personOneName, personTwoName } = req.body;

   const options = {
      amount: amount * 100,
      currency: "INR",
      payment_capture: 1,
      notes: {
         personOneName,
         personTwoName,
      },
   };
   try {
      const response = await razorpay.orders.create(options);
      res.json(response);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

router.post("/verify-payment", async (req, res) => {
   const { payment_id, order_id } = req.body;
   try {
      const payment = await razorpay.payments.fetch(payment_id);
      if (payment.order_id === order_id && payment.status === "captured") {
         res.json({ success: true });
      } else {
         res.status(400).json({
            success: false,
            message: "Payment verification failed",
         });
      }
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

module.exports = router;
