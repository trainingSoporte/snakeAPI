const userService = require('./users.service');

const getUsers = async()=>{
    return await userService.getUsers();
}

module.exports = {getUsers};