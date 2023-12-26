const mongoose = require('mongoose');
const { STRING } = require('sequelize');


const orderSchema = new mongoose.Schema({
    products: [{
        productData:{
            type: Object,required: true
        },
        quantity:{
            type: Number, required: true
        },
    }],
    user: {
        name: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }
});

module.exports = new mongoose.model('Orders',orderSchema);