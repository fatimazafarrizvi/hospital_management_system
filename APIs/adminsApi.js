const Admins = require('../Models/admins');

const adminfind = async (req, res) => {
    try {
        const { hospitalEmail, password } = req.body;  // Extract u_id and u_pwd from the request body

        // Find the user by ID
        const admin = await Admins.findOne({ hospitalEmail }).exec();

        if (admin) {
            // Check if the password matches
            if (admin.password === password) {
                console.log('Auth Success');
                res.json({ 'auth': 'success' });
            } else {
                console.log('Auth Failed - Incorrect Password');
                res.json({ 'auth': 'failed', 'message': 'Incorrect password' });
            }
        } else {
            console.log('Auth Failed - User Not Found');
            res.json({ 'auth': 'failed', 'message': 'User not found' });
        }
    } catch (error) {
        console.log('Fetch error :-', error);
        res.status(500).json({ 'message': 'An error occurred during authentication', 'error': error });
    }
};
const insert_admin = async (req, res) => {
    try {
        // Check if the user already exists by username, email, or phone
        const existingAdmins = await Admins.findOne({
            $or: [
                { hospitalEmail: req.body.hospitalEmail }
            ]
        });

        if (existingAdmins) {
            // If user exists, return an error
            return res.status(400).send({ message: "User already exists with the same username, email, or phone" });
        }

        // If user does not exist, create a new user
        const admin = new Admins({
            hospitalName : req.body.hospitalName,
            branchName : req.body.branchName,
            govtRegistrationNo : req.body.govtRegistrationNo,
            hospitalEmail : req.body.hospitalEmail,
            password: req.body.password
        });
        // hospitalName : String,
        // branchName : String,
        // govtRegistrationNo : String,
        // hospitalEmail : String,
        // password : String

        // Save the new user
        const savedAdmins = await admin.save();
        console.log('User inserted');
        res.send(savedAdmins);
    } catch (error) {
        res.status(400).send(error);
    }
};


const update_admin = async (req, res) => {
    let hospitalEmail = req.body.hospitalEmail
    const admin = {
        hospitalName : req.body.hospitalName,
        branchName : req.body.branchName,
        govtRegistrationNo : req.body.govtRegistrationNo,
        hospitalEmail : req.body.hospitalEmail,
        password: req.body.password
    }
    try {
        const updateAdmins = await Admins.updateOne(
            { hospitalEmail }, admin
        )
        if (updateAdmins.modifiedCount != 0) {
            console.log('User Updated', updateAdmins)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('User not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//delete product
const delete_admin = async (req, res) => {
    let hospitalEmail = req.body.hospitalEmail
    try {
        const deletedadmin = await Admins.deleteOne({ hospitalEmail })
        if (deletedadmin.deletedCount != 0) {
            console.log('User Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('User Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    adminfind,
    insert_admin,
    update_admin,
    delete_admin    
}