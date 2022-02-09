const express = require('express')
const router = express.Router()
const Courses = require("../models/courses_model")
const Enroll = require("../models/enrollment")
const nodemailer = require("nodemailer")

const sendMail = (student_email, student_name, course_name) => {

    sender = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "riddhipawar000@gmail.com",
            pass: "9922278217"
        }
    })

    mailOptions = {
        from: "riddhipawar000@gmail.com",
        to: student_email,
        subject: "Testing!",
        html: `
            <h1 style='text-align:center'>Welcome To LinkCode Family</h1>
            <hr>
            <h3 style='text-align:center;'>
            Congratulations ${student_name}! You've successfully enrolled for ${course_name} course at LinkCode Technologies.</h3>
        `
    }

    sender.sendMail(mailOptions, (err,info) =>{
        if(err){
            console.log(err);
        }
        else{
            console.log(`Email sent ${info.response}`);
        }
    })
}

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

const changeStatus = (student_id) =>{
    Enroll.findByIdAndUpdate({_id: student_id},
        { "$set": {status : true} }
    )
    .then(() =>{
        console.log("Status updated")
    })
}

const changeAvailableSeats = (available_seats, course_id, student_id) =>{
    count = parseInt(available_seats)-1
    console.log(count);
    Courses.findByIdAndUpdate(
        course_id, 
        { "$set": { available_seats : count } ,
        "$push": { "students": student_id }},
    )
    .then(result =>{
        console.log(result)
    })
}

router.put('/update_seats',(req,res,next) =>{
    Courses.findById(req.body.course_id)
    .then(result =>{

        course_name = result.course_name

        changeStatus(req.body.student_id)

        changeAvailableSeats(result.available_seats, req.body.course_id, req.body.student_id)

        Enroll.findById({_id: req.body.student_id})
        .then(result => {
           sendMail(result.email, result.full_name, course_name)
        })
    })
    
})

module.exports = router