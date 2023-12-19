const mongoose = require("mongoose");
 require("dotenv").config()
// module.exports=dbConnect

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected mongoDB");
  })
  .catch((err) => {
    console.log("failed" + err);
  });