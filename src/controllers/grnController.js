const grnModel = require('../models/grnModel');
const grnItem = require('../models/itemModel');

//<=========================Post APi=========================>

const createGrn = async (req, res) => {
    try {
        const grnData = req.body;
        const saveGrn = await grnModel.create(grnData)
        res.status(201).send({ Status: "GENERATED", message: saveGrn })
    } catch (error) {
        res.status(500).send({ Status: false, message: error.message })
    }
}
    
// <=========================Get Api===============================>

const getGrn = async (req, res) =>{
    try {
        const grnId = req.params.grnId
        const grnDetails = await grnModel.find({ _id: grnId, deleted: false })
        res.status(200).send({ status: true, message: grnDetails })
    } catch (err) {
        res.status(500).send({ status: false, message: error.message });
    }
}

//<======================== Put APi==========================>

const updateItem = async (req, res) => {
    try {
        const data = req.body
        const grnId = req.params.grnId
        const updateItems = await grnItem.findOneAndUpdate(
            { _id: grnId, deleted: false },
            {
                $set: {
                    quantity: data.quantity, productName: data.productName,
                    sellPrice: data.sellPrice, stockPrice: data.stockPrice,
                    updatedAt: Date.now()
                }
            },
            { new: true })

        res.status(200).send({ Status: "Completed", message: updateItems })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}


//<========================Delete Api===============================>

const deleteGrn = async (req, res) => {
    try {
        const grnId = req.params.grnId
        const data = await grnModel.findOneAndUpdate({ _id: grnId, deleted: false }, { $set: { deleted: true } })
        res.status(200).send({ Status: "Cancelled", message: "deleted successfully"})
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

module.exports.createGrn = createGrn;
module.exports.updateItem = updateItem;
module.exports.getGrn = getGrn;
module.exports.deleteGrn = deleteGrn;