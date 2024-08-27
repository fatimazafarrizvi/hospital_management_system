const mongoose = require('mongoose')
const registerOpdSchema = new mongoose.Schema({
    Name :String,
    Email :String,
    Address :String,
    Age : Number,
    PhoneNumber :String,
    Gender :String,
    CauseOfAdmission :String,
    RegistrationDate :String
})
module.exports = mongoose.model("registerOpd",registerOpdSchema)