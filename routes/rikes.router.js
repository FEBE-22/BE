const express = require("express");
const router = express.Router();

const {
  createRikes,
  getRikesById,
  updateRikes,
  deleteRikes,
} = require("../controllers/rikes.controller.js");

router.post("/", createRikes);
router.get("/byId", getRikesById);
router.post("/byId", updateRikes);
router.delete("/byId", deleteRikes);

module.exports = router;
