// admins
const mongoose = require('mongoose')
const adminsSchema = new mongoose.Schema({
    hospitalName : String,
    branchName : String,
    govtRegistrationNo : String,
    hospitalEmail : String,
    password : String
})
module.exports = mongoose.model("admins",adminsSchema)

//hospitalName