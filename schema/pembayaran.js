const mongoose = require("mongoose");

const dokterSchema = new mongoose.Schema({
    nama_dokter: String,
    spesialis: String,
    pengalaman: String,
    harga: String
    // id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    // id_dokter: { type: mongoose.Schema.Types.ObjectId, ref: 'dokter'}
});

module.exports = mongoose.model("pembayaran", pembayaranSchema);