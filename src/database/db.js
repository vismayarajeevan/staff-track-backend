const mongoose = require('mongoose')
const {MONGODB_URL} = require('../config/config')

mongoose.connect(MONGODB_URL).then(res=>{
    console.log('Mongodb connected successfully');  
}).catch(err=>{
    console.log('Mongodb connection failed');
    console.log(err);  
})