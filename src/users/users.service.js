const {User} = require('./users.entity')


// const users = [
//     {
//         username: 'adri',
//         fullname: 'Adrian Ojeda',
//         email: 'aojeda@claro.com.ar',
//         password: '123'
//     },
//     {
//         username: 'adri2',
//         fullname: 'Adrian Ojeda',
//         email: 'aojeda@claro.com.ar',
//         password: '12366'
//     }
// ]

const getUsers = async() => {
    return await User.findAll();
}

module.exports =  {getUsers};