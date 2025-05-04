require('dotenv').config();
const express = require('express')
const cors = require('cors')

// import port from config
const {PORT} = require('./src/config/config')


const app = express()
app.use(cors())
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`Server start running on port ${PORT}`);
    
})