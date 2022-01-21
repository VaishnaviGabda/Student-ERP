const express = require('express') 
<<<<<<< HEAD
const app = express()
const cors = require('cors')
require("dotenv").config();


//let port = process.env.PORT || 5000
//let host = process.env.HOST
=======
const connectdb = require('./db')
const app = express()
const enrollment_routes = require('./routes/enrollment')
const cors = require('cors')
require("dotenv").config();

>>>>>>> df45a3a3d841b5f15deb0d62411e36242480a67d
app.use(express.json())

app.use(cors());


<<<<<<< HEAD
 

 


app.listen(process.env.PORT || 3000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });

=======
 connectdb();
 app.use('/',enrollment_routes)


app.listen(process.env.PORT || 9000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });
>>>>>>> df45a3a3d841b5f15deb0d62411e36242480a67d
