const express = require("express");
const router = express.Router();

const {
  afterPayment
} = require("../controllers/pembayaran.controller.js");

router.post("/after", afterPayment);

module.exports = router;
