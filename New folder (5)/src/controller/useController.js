const User = require("./../model/userModel");

const postproduct = (req, res) => {
  console.log(req.body);
};

const getAllproduct = async (req, res) => {
  let allproduct = await product.find({});
  res.send(allproduct);
};

module.exports = { postproduct, getAllproduct };