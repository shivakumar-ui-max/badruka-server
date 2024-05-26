const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   personOneName: {
      type: String,
      required: true,
   },
   personTwoName: {
      type: String,
      required: true,
   },
   collegeName: {
      type: String,
      required: true,
   },
   group: {
      type: String,
      required: true,
   },
   year: {
      type: String,
      required: true,
   },
   personOneRollNumber: {
      type: String,
      required: true,
      unique: true,
   },
   personTwoRollNumber: {
      type: String,
      required: true,
      unique: true,
   },
   amount: {
      type: String,
      required: true,
   },
   paymentId: {
      type: String,
      required: true,
      unique: true,
   },
   orderId: {
      type: String,
      required: true,
      unique: true,
   },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
