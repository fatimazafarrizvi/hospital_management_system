const mongoose = require('mongoose')
const admitPatientSchema = new mongoose.Schema({
    Name :String,
    Address : String,
    Email :String,
    Age : Number,
    PhoneNumber : String,
    Gender : String,
    BloodGroup : String,
    Department : String,
})
module.exports = mongoose.model("admitPatient",admitPatientSchema)