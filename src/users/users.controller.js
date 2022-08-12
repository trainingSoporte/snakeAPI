const userService = require('./users.service');
const {encriptUser} = require('../login/login.service');

const getUsers = async(id)=>{

    if(id) return await userService.getUser(id);
    else  return await userService.getUsers();

     
}

const createUser = async (user) => {
    const _user = await encriptUser(user);
    return await userService.createUser(_user);
}

module.exports = {getUsers ,createUser};