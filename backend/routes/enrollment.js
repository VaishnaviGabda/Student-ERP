
const express = require('express')
const router = express.Router()
const Enroll = require("../models/enrollment")


router.post('/enrollnow' ,(req,res,next)=>{

     enroll = Enroll(req.body)
     enroll.save()
     .then(item => {
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