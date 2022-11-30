const mongoose = require("mongoose");

const pembayaranSchema = new mongoose.Schema({
    total: String,
    id_midtrans: String,
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    id_dokter: { type: mongoose.Schema.Types.ObjectId, ref: 'dokter'}
});

module.exports = mongoose.model("pembayaran", pembayaranSchema);