const {app} = require('./src/main');
const {MySql,dbSnake2} = require('./src/connections/snake2MySQL');

app.listen(3000,()=> console.log('Server listen port 3000..'));


// //primer nivel
// this.config = {
//     database: '',
//     username: '',
//     password: '',
//     dbConfig: {
//         host: '',
//         dialect: 'mysql'
//     }
// };
// //segundo nivel
// const dbSnake2 = {
//     database: 'snake2',
//     username: '',
//     password: '',
//     dbConfig: {
//         host:'localhost:3306'
//     }
// };

// //tercer nivel
// configDB = {
//     database: '',
//     username: login.username,
//     password: login.password,
//     dbConfig: ''
// };

// //Fusionados
//  bb = {
//     database: 'snake2',
//     username: login.username,
//     password: login.password,
//     dbConfig: {
//         host: 'localhost:3306',
//         dialect: 'mysql'
//     } 
// };


const initMySql = async(login)=>{
    try {
        let configDB = {
            database: dbSnake2.database,
            username: login.username,
            password: login.password,
            dbConfig: dbSnake2.dbConfig
        };
        
        console.log(configDB);

        mysql = new MySql(configDB);
        //testDB
        console.log('test MySQL');
        await mysql.authenticate();
        console.log('OK connection..');


    } catch (error) {
        console.error(error);
    }
}


initMySql({username:'Adrian2',password:'123456'});