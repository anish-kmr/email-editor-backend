const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { routes } = require("./routes.json");
const { auth } = routes;

router.post(auth.generateAccessToken,authController.generateAccessToken)

module.exports = router;