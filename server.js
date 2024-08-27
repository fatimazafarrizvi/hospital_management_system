const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const hospitalRoutes = require('./Routes/hospital_routes')
const opdRoutes = require('./Routes/registerForOpd_routes')
const bloodRoutes = require('./Routes/bloodUnit_routes')
const admitPRoutes = require('./Routes/admitPatient_routes')
const userRoutes = require('./Routes/user_routes')

//import url
let url = require('./url')
//create rest object
let app = express()
//set JSON as MIME type
app.use(bodyparser.json())
//client is not sending form data -> encoding JSON
app.use(bodyparser.urlencoded({ extended: false }))
//enable CORS -> Cross Origine Resource Sharing -> communication among various ports
app.use(cors())
mongoose.connect(url,{dbName : "sih"}).then(()=>{
    console.log("Connection successful")
},(errRes)=>{
    console.log("Connection Failed - ",errRes)
})
app.use('/',hospitalRoutes)
app.use('/opd',opdRoutes)
app.use('/blood', bloodRoutes)
app.use('/admitP', admitPRoutes)
app.use('/user', userRoutes)
//create port
let port = 8080
//assign port no
app.listen(port, () => {
    console.log('Server listening port no:- ', port)
})