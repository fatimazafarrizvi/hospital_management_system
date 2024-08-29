const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    name : String,
    username : String,
    email : String,
    phoneNumber : String,
    age : String,
    password : String,
    recheckPassword : String
})
module.exports = mongoose.model("users",usersSchema)