const express = require("express")
const router = express.Router()
const holaController = require("../controllers/holaControllers")
router.get("/test",holaController.holaMundo)

module.exports = router