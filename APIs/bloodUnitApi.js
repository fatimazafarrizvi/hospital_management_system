const BloodUnit = require('../Models/bloodUnit')
const bloodUnit_all = async(req,res) =>{
    try {
        const bloodUnit = await BloodUnit.find()
        res.json(bloodUnit)
    } catch (error) {
        console.log("fetch error")
        res.json({
            'message': error
        })
    }
}
const insert_bloodUnit = async (req, res) => {
    const bloodUnit = new BloodUnit({
        Name: req.body.Name,
        BloodGroup : req.body.BloodGroup,
        RequiredUnits : req.body.RequiredUnits,
        Age: req.body.Age,
        Email: req.body.Email,
        Address: req.body.Address,
        CauseForBloodNeed :req.body.CauseForBloodNeed
    });
    
    try {
        const savedbloodUnit = await bloodUnit.save();
        res.send(savedbloodUnit);
    } catch (error) {
        res.status(400).send(error);
    }
};

const update_bloodUnit = async (req, res) => {
    let Name = req.body.Name
    const bloodUnit = {
        Name: req.body.Name,
        BloodGroup : req.body.BloodGroup,
        RequiredUnits : req.body.RequiredUnits,
        Age: req.body.Age,
        Email: req.body.Email,
        Address: req.body.Address,
        CauseForBloodNeed :req.body.CauseForBloodNeed
    }
    try {
        const updatebloodUnit = await BloodUnit.updateOne(
            { Name }, bloodUnit
        )
        if (updatebloodUnit.modifiedCount != 0) {
            console.log('Product Updated', updatebloodUnit)
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
const delete_bloodUnit = async (req, res) => {
    let Name = req.body.Name
    try {
        const deletedbloodUnit = await BloodUnit.deleteOne({ Name })
        if (deletedbloodUnit.deletedCount != 0) {
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
    bloodUnit_all,
    insert_bloodUnit,
    update_bloodUnit,
    delete_bloodUnit
}