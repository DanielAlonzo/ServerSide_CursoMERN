const express = require("express");
const server = express();
const api_user = require("./routes/api/user");
const mongoose = require("mongoose");
const mongodb_key = require("./config/mongodb-key").key;

mongoose
  .connect(mongodb_key,()=>{},{useNewUrlParser:true,useUnifiedTopology:true})
  .then(() => console.log("Mongo is connected"))
  .catch((err) => console.log(err));

server.use(express.json());
server.use(api_user);

server.listen(5000, (err) => {
  console.log("Express server running port 5000");
});
