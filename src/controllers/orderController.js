const orderModel = require('../models/orderModel')
const ItemModel = require('../models/itemModel')

//<==========================================Post Api===========================================>

const orderCreate = async (req, res) => {
    try {
        const data = req.body;
        const createOrder = await orderModel.create(data)
        res.status(201).send({ Status: "Generated", message: createOrder })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

//<=======================================  get API ===================================================>

const getOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId
        const orderDetails = await orderModel.find({ _id: orderId, deleted: false })
        res.status(200).send({ status: true, message: orderDetails })
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
}

//<===========================================  put API ==========================================>

const orderUpdate = async (req, res) => {
    try {
        const data = req.body
        const orderId = req.params.orderId;
        const updateOrder = await ItemModel.findOneAndUpdate({ _id: orderId, deleted: false }, {
            $set: {
                productName: data.productName, quantity: data.quantity,
                stockPrice: data.stockPrice, sellPrice: data.sellPrice, updatedAt: Date.now()
            }
        }, { new: true })

        res.status(200).send({ status: "COMPLETED", message: updateOrder })
    } catch (error) {
        res.status(500).send({ status: false, message: err.message });
    }
}

//<========================================= delete API ==================================================>

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.orderId

        const data = await orderModel.findOneAndUpdate({ _id: orderId, deleted: false }, { $set: { deleted: true } })
        res.status(200).send({ status: "CANCELLED", message: "deleted Successfully" })
    } catch (err) {
        res.status(500).send({ status: false, message: err.message });
    }
}


module.exports.orderCreate = orderCreate;
module.exports.orderUpdate = orderUpdate;
module.exports.deleteOrder = deleteOrder;
module.exports.getOrder = getOrder;