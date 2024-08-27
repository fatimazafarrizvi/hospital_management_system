const AdmitPatient = require('../Models/admitPatient')
const admitPatient_all = async(req,res) =>{
    try {
        const admitPatient = await AdmitPatient.find()
        res.json(admitPatient)
    } catch (error) {
        console.log("fetch error")
        res.json({
            'message': error
        })
    }
}
const insert_admitPatient = async (req, res) => {
    const admitPatient = new AdmitPatient({
        Name: req.body.Name,
        Address: req.body.Address,
        Email: req.body.Email,
        Age: req.body.Age,
        PhoneNumber : req.body.PhoneNumber,
        Gender: req.body.Gender,
        BloodGroup : req.body.BloodGroup,
        Department: req.body.Department
    });
    
    try {
        const savedadmitPatient = await admitPatient.save();
        res.send(savedadmitPatient);
    } catch (error) {
        res.status(400).send(error);
    }
};

const update_admitPatient = async (req, res) => {
    let Name = req.body.Name
    const admitPatient = {
        Name: req.body.Name,
        Address: req.body.Address,
        Email: req.body.Email,
        Age: req.body.Age,
        PhoneNumber : req.body.PhoneNumber,
        Gender: req.body.Gender,
        BloodGroup : req.body.BloodGroup,
        Department: req.body.Department
    }
    try {
        const updateadmitPatient = await AdmitPatient.updateOne(
            { Name }, admitPatient
        )
        if (updateadmitPatient.modifiedCount != 0) {
            console.log('Product Updated', updateadmitPatient)
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
const delete_admitPatient = async (req, res) => {
    let Name = req.body.Name
    try {
        const deletedadmitPatient = await admitPatient.deleteOne({ Name })
        if (deletedadmitPatient.deletedCount != 0) {
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
    admitPatient_all,
    insert_admitPatient,
    update_admitPatient,
    delete_admitPatient
}