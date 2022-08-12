const {User} = require('./users.entity.raw')


const getUsers = async() => {
    return await User.getAll();
}

const getUser = async(id) => {
    const user = await User.getId(id);
    return user[0];  
}

const createUser = async(user) => {
    return await User.create(user);
}

module.exports =  {getUsers,getUser,createUser};