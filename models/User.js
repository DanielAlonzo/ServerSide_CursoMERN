const mongodb = require("mongoose");
const Schema = mongodb.Schema

const UserSchema = new Schema({
   name:{
       type:String,
       required:true
   },
   sexo:{
       type:String,
       required:true
   },
   telefono:{
       type:String,
       required:true
   },
   date:{
       type:Date,
       default:Date.now
   }
})
module.exports = User = mongodb.model("users",UserSchema);
// "name" : req.body.name,
// "sexo" : req.body.sexo,
// "telefono" : req.body.telefono