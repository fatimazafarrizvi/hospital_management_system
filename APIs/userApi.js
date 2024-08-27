const User = require('../Models/users');

const userfind = async (req, res) => {
    try {
        const { username, password } = req.body;  // Extract u_id and u_pwd from the request body

        // Find the user by ID
        const user = await User.findOne({ username }).exec();

        if (user) {
            // Check if the password matches
            if (user.password === password) {
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
const insert_user = async (req, res) => {
    try {
        // Check if the user already exists by username, email, or phone
        const existingUser = await User.findOne({
            $or: [
                { username: req.body.username },
                { email: req.body.email },
                { phone: req.body.phone }
            ]
        });

        if (existingUser) {
            // If user exists, return an error
            return res.status(400).send({ message: "User already exists with the same username, email, or phone" });
        }

        // If user does not exist, create a new user
        const user = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            phone: req.body.phone,
            role: req.body.role,
            registered_at: req.body.registered_at,
            last_login: req.body.last_login
        });

        // Save the new user
        const savedUser = await user.save();
        console.log('User inserted');
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
};


const update_user = async (req, res) => {
    let username = req.body.username
    const user = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        phone: req.body.phone,
        role: req.body.role,
        registered_at: req.body.registered_at,
        last_login: req.body.last_login
    }
    try {
        const updateUser = await User.updateOne(
            { username }, user
        )
        if (updateUser.modifiedCount != 0) {
            console.log('User Updated', updateUser)
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
const delete_user = async (req, res) => {
    let username = req.body.username
    try {
        const deleteduser = await User.deleteOne({ username })
        if (deleteduser.deletedCount != 0) {
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
    userfind,
    insert_user,
    update_user,
    delete_user    
}