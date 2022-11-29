const express = require("express");
const router = express.Router();

const {
    inputDataForm,
} = require("../controllers/formKeluhan.controller.js")

router.post("", inputDataForm);

module.exports = router