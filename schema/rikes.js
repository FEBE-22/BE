const mongoose = require("mongoose");

const rikesSchema = new mongoose.Schema({
    riwayat_penyakit: String,
    berat_badan: Number,
    tinggi_badan: Number,
    golongan_darah: String,
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'}
});

module.exports = mongoose.model("riwayat_kesehatan", rikesSchema);