const Hospital = require('../Models/hospitals')
const hospital_all = async(req,res) =>{
    try {
        const hospital = await Hospital.find()
        res.json(hospital)
    } catch (error) {
        console.log("fetch error")
        res.json({
            'message': error
        })
    }
}
const insert_hp_data = async(req, res) => {
    const hospital = new Hospital({
        name : req.body.name,
        govt_reg_num : req.body.govt_reg_num,
        address : req.body.address,
        phone : req.body.phone
    })
    try {
        const savedHpData = await hospital.save()
        res.send(savedHpData)
    } catch (error) {
        res.status(400).send(error)
    }
}
const update_hp_data = async (req, res) => {
    let name = req.body.name
    const hospital = {
        name : req.body.name,
        govt_reg_num : req.body.govt_reg_num,
        address : req.body.address,
        phone : req.body.phone
    }
    try {
        const updateHpData = await Hospital.updateOne(
            { name }, hospital
        )
        if (updateHpData.modifiedCount != 0) {
            console.log('Product Updated', updateHpData)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('Product not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
const delete_hp_data = async (req, res) => {
    let name = req.body.name
    try {
        const deletedHpData = await Hospital.deleteOne({ name })
        if (deletedHpData.deletedCount != 0) {
            console.log('Product Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('Product Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    hospital_all,
    insert_hp_data,
    update_hp_data,
    delete_hp_data
}