
const express = require('express')
const router = express.Router()
const Courses = require("../models/courses_model")


router.post('/add_course' ,(req,res,next)=>{

     course = Courses(req.body)
     course.save()
     .then(item => {
        console.log("course saved to database");
        res.send("item saved to database");
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });

})


module.exports = router