const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken/verifyToken");

const {
  requestPayment,
} = require("../controllers/pembayaran.controller.js");

router.post("/", requestPayment, verifyToken);

module.exports = router;
