const mongoose = require('mongoose')
const patientsSchema = new mongoose.Schema({
    name : String,
    age : Number,
    gender : String,
    phone : String,
    address : String,
    blood_group : String,
    cause_of_admission : Array,
    hospital_id : String,
    admission_date : String
})
module.exports = mongoose.model("patients",patientsSchema)