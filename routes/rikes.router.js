const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken/verifyToken");

const {
  createRikes,
  getRikesById,
  updateRikes,
  deleteRikes,
} = require("../controllers/rikes.controller.js");

router.post("/", createRikes, verifyToken);
router.get("/byId", getRikesById, verifyToken);
router.post("/byId", updateRikes, verifyToken);
router.delete("/byId", deleteRikes, verifyToken);

module.exports = router;
