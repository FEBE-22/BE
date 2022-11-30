const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken/verifyToken");

const {
    createJadwal,
    getAllJadwal,
    getJadwalById,
    updateJadwal,
    deleteJadwalById,
} = require("../controllers/jadwal.controller.js");

router.post("/", createJadwal, verifyToken);
router.get("/", getAllJadwal);
router.get("/byId", getJadwalById);
router.post("/byId", updateJadwal);
router.delete("/byId", deleteJadwalById);

module.exports = router