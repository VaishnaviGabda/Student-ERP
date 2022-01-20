const express = require('express') 
const connectdb = require('./db')
const app = express()
const enrollment_routes = require('./routes/enrollment')
const cors = require('cors')
require("dotenv").config();

app.use(express.json())

app.use(cors());


 connectdb();
 app.use('/',enrollment_routes)


app.listen(process.env.PORT || 9000, function(){
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
 });
