const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String
})
module.exports = mongoose.model("users",usersSchema)