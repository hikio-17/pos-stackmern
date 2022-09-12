const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

// get item
router.get("/get-item", itemController.getItemController);

// add item
router.post("/add-item", itemController.addItemController);

// update item
router.put("/edit-item", itemController.editItemController);

// delete item
router.post("/delete-item", itemController.deleteItemController);

module.exports = router;
