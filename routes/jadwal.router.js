const express = require("express");
const router = express.Router();

const {
    createJadwal,
    getAllJadwal,
    getJadwalById,
    updateJadwal,
    deleteJadwalById,
} = require("../controllers/jadwal.controller.js");

router.post("/", createJadwal);
router.get("/", getAllJadwal);
router.get("/byId", getJadwalById);
router.post("/byId", updateJadwal);
router.delete("/", deleteJadwalById);

module.exports = router