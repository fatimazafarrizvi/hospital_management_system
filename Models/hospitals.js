const mongoose = require('mongoose')
const hospitalsSchema = new mongoose.Schema({
    name : String,
    govt_reg_num : String,
    address : String,
    phone : String
})
module.exports = mongoose.model("hospitals",hospitalsSchema)