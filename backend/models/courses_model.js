const mongoose = require("mongoose")
const Courses = mongoose.Schema({
  
   "course_name":{
       type:String
   },
   "seats":{
       type:String
   }
   
})

module.exports = mongoose.model("Course", Courses)