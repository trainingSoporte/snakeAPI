const { Model, DataTypes } = require('sequelize');
const {sqlRawQueries,QueryTypes} = require('../connections/snake2MySQL');

class User extends Model {
    static init(sequelize) {
        return super.init({
            // Model attributes are defined here
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            fullname: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            // Other model options go here
            modelName: 'users',
            sequelize,
            timestamps: false,
            createdAt: false,
            updatedAt: false
        })
    }
    static getAll() {
        return this.sequelize.query(sqlRawQueries.getUsers, { type: QueryTypes.SELECT });
    }
    static getId(where) {
        return this.sequelize.query(sqlRawQueries.getUserById,
            { bind: { username: where }, type: QueryTypes.SELECT }
        );
    }
    static create(user) {
        return this.sequelize.query(sqlRawQueries.createUser,
            {
                bind: {
                    username: user.username,
                    fullname: user.fullname,
                    email: user.email,
                    password: user.password
                }, type: QueryTypes.INSERT
            }
        );
    }
}


module.exports= {User};