const express = require('express')
const router = express.Router()
const Courses = require("../models/courses_model")
const Enroll = require("../models/enrollment")

const available_seats = (id, total_seats) =>{
    Courses.findByIdAndUpdate({_id:id},
        {"$set":{available_seats : total_seats}})
    .then(result => {
        console.log("OK");
    })
}

router.post('/add_course' ,(req,res,next)=>{

     course = Courses(req.body)
     course.save()
     .then(result => {
        available_seats(result._id,result.total_seats)
        console.log("course saved to database");
        res.send("item saved to database");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });

})

router.get('/get_courses',(req,res,next) =>{
    Courses.find()
    .then(result =>{
        res.send(result)
    })
})

router.put('/update_seats',(req,res,next) =>{
    Courses.findById(req.body.course_id)
    .then(result =>{
        count = parseInt(result.total_seats)-1
        Courses.findByIdAndUpdate(
            req.body.course_id, 
            { "$set": {available_seats : count} ,
            "$push": { "students": req.body.student_id }},
        )
        .then(result =>{
            res.send("Updated")
        })
        Enroll.findByIdAndUpdate({_id: req.body.student_id},
            { "$set": {status : true} }
        )
        .then(result =>{
            res.send("Updated status")
        })
    })
    
})

module.exports = router