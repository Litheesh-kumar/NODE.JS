const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../util/database.js');

const Cart = sequelize.define('cart',{
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  }
});

module.exports = Cart;