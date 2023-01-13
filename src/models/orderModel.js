const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    invoiceNumber: {
        type: String,
        required: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerFullAddress: {
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        pincode: {
            type: Number,
            required: true
        },
    },
    date: String,
    deleted: {
        type: Boolean,
        default: false
    }
},
    {
       timestamps: true
    }
)
module.exports = mongoose.model('orderModel', orderSchema)