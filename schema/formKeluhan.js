const mongoose = require("mongoose");

const formKeluhanSchema = new mongoose.Schema({
    nama_lengkap: String,
    email: String,
    keluhan: String, 
})

module.exports = mongoose.model("formKeluhan", formKeluhanSchema);