
const express = require('express')
const router = express.Router()
const Enroll = require("../models/enrollment")


router.post('/enrollnow' ,(req,res,next)=>{

     enroll = Enroll(req.body)
     enroll.save()
     .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });

})

module.exports = router