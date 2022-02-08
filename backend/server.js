const express = require('express') 
const app = express()
const enrollment_routes = require('./routes/enrollment')
const courses = require('./routes/courses')
const cors = require('cors')
require("dotenv").config();

const connectdb = require('./db')

app.use(express.json())

app.use(cors());


connectdb();
app.use('/',enrollment_routes)
app.use('/admin',courses)


app.listen(process.env.PORT || 9000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });