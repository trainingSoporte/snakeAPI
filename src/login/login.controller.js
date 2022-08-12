const { getUsers } = require('../users/users.controller');
const { validateUser ,loginUser} = require('./login.service');

const login = async(login) => {
    try {
        const user = await getUsers(login.username);
        const validate = await validateUser(login, user);
        if (validate) {
            return loginUser(user);
        }
    } catch (error) {
        console.error(error);
    }


}

module.exports = {login};