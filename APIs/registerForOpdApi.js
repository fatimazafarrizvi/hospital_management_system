const RegisterOpd = require('../Models/registerForOpd')
const registerOpd_all = async(req,res) =>{
    try {
        const registerOpd = await RegisterOpd.find()
        res.json(registerOpd)
    } catch (error) {
        console.log("fetch error")
        res.json({
            'message': error
        })
    }
}
const insert_registerOpd = async (req, res) => {
    const registerOpd = new RegisterOpd({
        Name: req.body.Name,
        Email: req.body.Email,
        Address: req.body.Address,
        Age: req.body.Age,
        PhoneNumber: req.body.PhoneNumber,
        Gender: req.body.Gender,
        CauseOfAdmission: req.body.CauseOfAdmission,
        RegistrationDate: req.body.RegistrationDate
    });
    
    try {
        const savedregisterOpd = await registerOpd.save();
        res.send(savedregisterOpd);
    } catch (error) {
        res.status(400).send(error);
    }
};

const update_registerOpd = async (req, res) => {
    let Name = req.body.Name
    const registerOpd = {
        Name: req.body.Name,
        Email: req.body.Email,
        Address: req.body.Address,
        Age: req.body.Age,
        PhoneNumber: req.body.PhoneNumber,
        Gender: req.body.Gender,
        CauseOfAdmission: req.body.CauseOfAdmission,
        RegistrationDate: req.body.RegistrationDate
    }
    try {
        const updateregisterOpd = await RegisterOpd.updateOne(
            { Name }, registerOpd
        )
        if (updateregisterOpd.modifiedCount != 0) {
            console.log('Product Updated', updateregisterOpd)
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
const delete_registerOpd = async (req, res) => {
    let Name = req.body.Name
    try {
        const deletedregisterOpd = await RegisterOpd.deleteOne({ Name })
        if (deletedregisterOpd.deletedCount != 0) {
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
    registerOpd_all,
    insert_registerOpd,
    update_registerOpd,
    delete_registerOpd
}