const mongoose = require('mongoose')
const bloodUnitSchema = new mongoose.Schema({
    Name :String,
    BloodGroup : String,
    RequiredUnits : Number,
    Age : Number,
    Email : String,
    Address :String,
    CauseForBloodNeed :String
})
module.exports = mongoose.model("bloodUnit",bloodUnitSchema)