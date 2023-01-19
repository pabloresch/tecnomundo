const express = require("express");
const router = express.Router();

const controller = require("../controllers/apiController");

router.post("/checkout", controller.checkout);

router.post("/discount", controller.discount);

module.exports = router;
