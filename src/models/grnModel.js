
const mongoose = require('mongoose');
const grnSchema = new mongoose.Schema({
    vendorName: {
        fname: {
            type: String,
            required: true,
        },
        lname: {
            type: String,
            required: true
        }
    },
    invoiceNumber: {
        type: String
    },
    vendorFullAddress: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        pincode: {
            type: Number,
            required: true
        }
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
module.exports = mongoose.model('GrnModel', grnSchema);