
const express = require('express')
const router = express.Router()
const Enroll = require("../models/enrollment")




const createStudentId = (id) =>{
    
    str = JSON.stringify(id)
    s_id = "LT_"+str.substring(19 , 24); 
    Enroll.findByIdAndUpdate({_id:id},
        {"$set":{student_id:s_id}})
        .then(result => {
            console.log("Student Id generated");
        })
} 


router.post('/enrollnow' ,(req,res,next)=>{

  
     enroll = Enroll(req.body)
     enroll.save()
     .then(item => {
        createStudentId(item._id);
         console.log("item saved to database");
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });

})

router.get('/get_requests',(req,res,next) =>{
    Enroll.find({"status": false})
    .then(result =>{
        res.send(result)
    })
})

module.exports = router