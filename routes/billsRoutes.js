const express = require("express");
const router = express.Router();

const billsController = require("../controllers/billsController");

// get bills
router.get("/get-bills", billsController.getBillsController);

// add bills
router.post("/add-bills", billsController.addBillsController);

module.exports = router;
