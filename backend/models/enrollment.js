const mongoose = require("mongoose")
const EnrollmentData = mongoose.Schema({
  
   "full_name":{
       type:String
   },
   "email":{
       type:String
   },
   "phone":{
       type:String
   },
   "degree":{
       type:String
   },
   "branch":{
       type:String
   },
   "course":{
       type:String
   }
   
})

module.exports = mongoose.model("EnrollmentData", EnrollmentData)