const express = require("express");
const router = express.Router();

const {
  requestPayment
} = require("../controllers/pembayaran.controller.js");

router.post("/", requestPayment);

module.exports = router;
