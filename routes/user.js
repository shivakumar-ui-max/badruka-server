const express = require("express");
const User = require("../model/schema.mode");

const route = express.Router();

route.post("/user", async (req, res) => {
   const { personOneRollNumber, personTwoRollNumber } = req.body.details;

   try {
      const personOneName = await User.findOne({ personOneRollNumber });
      const personTwoName = await User.findOne({ personTwoRollNumber });

      if (!personOneName && !personTwoName) {
         res.status(404).json({
            noError: "not matched",
         });
      } else {
         const response = {};
         if (personOneName) {
            response.personOneRollNumber = "Roll number already exists";
         }
         if (personTwoName) {
            response.personTwoRollNumber = "Roll number already exists";
         }
         res.json(response);
      }
   } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
   }
});

module.exports = route;
