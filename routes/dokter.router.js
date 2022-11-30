const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken/verifyToken");

const {
  createDokter,
  getAllDokter,
  getDokterById,
  updateDokter,
  deleteDokter,
} = require("../controllers/dokter.controller.js");

router.post("/", createDokter, verifyToken);
router.get("/", getAllDokter, verifyToken); //user bisa liat harus login dulu apa ga?
router.get("/byId", getDokterById, verifyToken);
router.post("/byId", updateDokter, verifyToken);
router.delete("/byId", deleteDokter, verifyToken);

module.exports = router;
