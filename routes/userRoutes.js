const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// register method-post
router.post("/register", userController.registerController);

// login method-post
router.post("/login", userController.loginController);

module.exports = router;
