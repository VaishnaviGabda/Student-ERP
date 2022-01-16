const express = require('express') 
const app = express()
const cors = require('cors')
require("dotenv").config();


//let port = process.env.PORT || 5000
//let host = process.env.HOST
app.use(express.json())

app.use(cors());


 

 


app.listen(process.env.PORT || 3000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });

