const mongoose = require("mongoose");

const formKeluhanSchema = new mongoose.Schema({
    nama_lengkap: String,
    email: String,
    keluhan: String, // var string or text ??
})

module.exports = mongoose.model("formKeluhan", formKeluhanSchema);