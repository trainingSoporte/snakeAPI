const {MySql,DataTypes,Model,QueryTypes} = require('../../database/mysql/mysql');


const dbSnake2 = {
    database: 'snake2',
    username: '',
    password: '',
    dbConfig: {
        host:'localhost'
    }
};

const sqlRawQueries ={
    getUsers:'SELECT * FROM users',
    getUserById:'SELECT * FROM users WHERE username = $username',
    createUser: 'INSERT INTO users (username,fullname,email,password) VALUES($username,$fullname,$email,$password)'
}

module.exports = {MySql,dbSnake2,DataTypes, Model,sqlRawQueries,QueryTypes};

