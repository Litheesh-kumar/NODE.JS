const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../util/database.js');

const User = sequelize.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false
    },
    email: DataTypes.STRING
});

module.exports = User;