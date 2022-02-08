const mongoose = require("mongoose")
const Courses = mongoose.Schema({
  
   "course_name":{
       type:String
   },
   "total_seats":{
       type:String
   },
   "available_seats":{
      type:String,
   },
   "students":{
       type:[]
  }
   
})

module.exports = mongoose.model("Course", Courses)