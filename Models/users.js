const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    phone : String,
    role : String,
    registered_at : String,
    last_login : String
})
module.exports = mongoose.model("users",usersSchema)