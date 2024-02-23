const UserService = require('../service/user.service.js')

const User = new UserService();

exports.createUser = async (req, res) => {
    try {
        const user = await User.createUser(req.body);
        res.status(201).json({ msg: "User Created", user })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}