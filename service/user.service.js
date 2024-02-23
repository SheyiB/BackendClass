const db = require('../models')
const User = db.User;

class UserService {

    async createUser(userData) {
        try {
            const user = await User.create(userData);

            return user;
        }
        catch (error) {
            return error;
        }
    }
}

module.exports = UserService;