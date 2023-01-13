const mongoose = require('mongoose')
const itemSchema = new mongoose.Schema({
    productName: {
        type: String,
        unique: true,
        required: true
    },
    quantity: {
        type: Number,
        requred: true
    },
    sellPrice: String,
    stockPrice: String,
    deleted: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true
}) 
module.exports = mongoose.model('ItemModel', itemSchema)