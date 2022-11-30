const express = require("express");
const router = express.Router();
const verifyToken = require("../verifyToken/verifyToken");

const {
  register,
  login,
  updateProfil,
  getProfil,
} = require("../controllers/user.controller");

router.get("/byId", getProfil, verifyToken);
router.post("/byId", updateProfil, verifyToken);
router.post("/register", register);
router.post("/login", login);

module.exports = router;
