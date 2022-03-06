const mongoose = require("mongoose")
const LoginData = mongoose.Schema({
  
   "student_id":{
       type:String,
   },
   "email":{
    type:String
   },
   "password":{
    type:String,
    default:null
   },
   
})

module.exports = mongoose.model("LoginData", LoginData)