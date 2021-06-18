const { Model, DataTypes } = require('sequelize');

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
}


module.exports= {User};