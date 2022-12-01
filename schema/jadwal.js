const mongoose = require("mongoose");

const jadwalSchema = new mongoose.Schema({
    hari: String,
    waktu: String,
})

module.exports = mongoose.model("jadwal", jadwalSchema);