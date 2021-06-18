const {MySql,DataTypes,Model} = require('../../database/mysql/mysql');


const dbSnake2 = {
    database: 'snake2',
    username: '',
    password: '',
    dbConfig: {
        host:'localhost'
    }
};

module.exports = {MySql,dbSnake2,DataTypes, Model};

