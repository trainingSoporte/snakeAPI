


const users = [
    {
        username: 'adri',
        fullname: 'Adrian Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '123'
    },
    {
        username: 'adri2',
        fullname: 'Adrian Ojeda',
        email: 'aojeda@claro.com.ar',
        password: '12366'
    }
]

const getUsers = () => {
    return users;
}

module.exports =  {getUsers};