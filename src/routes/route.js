const express = require('express');
const router = express.Router();
const orderController =require('../controllers/orderController')
const grnController = require('../controllers/grnController')

router.post("/createGrn", grnController.createGrn )
router.get("/getGrn/:grnId" , grnController.getGrn)
router.put("/updateItem/:grnId" , grnController.updateItem )
router.delete("/deleteGrn/:grnId" , grnController.deleteGrn)

router.post("/orderCreate", orderController.orderCreate )
router.get("/getOrder/:orderId" , orderController.getOrder)
router.put("/orderUpdate/:orderId" , orderController.orderUpdate )
router.delete("/deleteOrder/:orderId" , orderController.deleteOrder)

router.all("/*", (req, res) =>{
    res.status(404).send({ msg: "invalid http request" })
})

module.exports = router;