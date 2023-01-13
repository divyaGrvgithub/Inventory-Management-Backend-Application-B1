const mongoose = require('mongoose')
const orderLIneItemSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    sellPrice: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)
module.exports = mongoose.Model('orderLIneItem', orderLIneItemSchema)