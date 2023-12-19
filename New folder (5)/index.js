const productrouter= require("./src/routers/productrouter.js");
const express = require('express')
const app = express()
require("./src/config/db")
const bodyParser = require('body-parser')

//  const dbConnect=require("./src/config/db")
 const Port = process.env.PORT || 5000;
console.log(process.env.PORT);


app.use(bodyParser.json());
app.use("/", productrouter); 
// dbConnect()
app.get('/', (req, res) => {

  // filteredData=data.products

  // if(req.query.name){
  // filteredData = filteredData.filter((x)=>{
  //   x.name.trim().toLowerCsae().includes(req.query.name.trim().toLowerCsae())
  // })
  // res.send(filteredData)
  // }
})

 

app.listen(Port, () => {
  console.log(`Example app listening on port ${Port}`)
})