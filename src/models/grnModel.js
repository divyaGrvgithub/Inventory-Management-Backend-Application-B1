
const mongoose = require('mongoose');
const objectId = mongoose.Schema.Type.objectId
const grnSchema = new mongoose.Schema({

    vendorName: {
        fname: {
            type: String,
            required: true,
            lowercase: true
        },
        lname: {
            type: String,
            required: true,
            lowercase: true
        }
    },

    invoiceNumber: {
        type: String
    },

    vendorFullAddress: {
        city: {
            type: String,
            required: true,
            lowercase: true
        },
        state: {
            type: String,
            required: true,
            lowercase: true
        },
        pincode: {
            type: Number,
            required: true
        }

    },
    grnLineItemsId: {
        type: objectId,
        ref: "grnLineItem"
    },
    delete: {
        type: Boolean,
        default: false
    },

    updatatedAt: Date,

    date: String

}, {

    timestamps: true

});

module.exports = mongoose.model('Grn', grnSchema);