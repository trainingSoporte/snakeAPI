const userService = require('./users.service');

const getUsers = ()=>{
    return userService.getUsers();
}

module.exports = {getUsers};