const express = require("express");
const router = express.Router();

const {
  createDokFav,
  getAllDokFav,
//   deleteDokFavById,
} = require("../controllers/dokFav.controller.js");

router.post("/", createDokFav);
router.get("/", getAllDokFav);
// router.delete("/byId", deleteDokFavById);

module.exports = router;
