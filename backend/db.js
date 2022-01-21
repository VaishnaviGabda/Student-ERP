const  mongoose = require('mongoose')

const connectdb = ()=>{

    mongoose.connect('mongodb+srv://cluster:cluster1234@cluster0.21nz6.mongodb.net/StudentERP?retryWrites=true&w=majority').then(()=>{
        console.log('connected')
    }).
    catch((err)=>{
        console.log(err)

    })
    
}
module.exports = connectdb