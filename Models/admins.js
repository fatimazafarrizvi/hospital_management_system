// admins
const mongoose = require('mongoose')
const adminsSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    phone : String,
    hospital_Id : String
})
module.exports = mongoose.model("admins",adminsSchema)