const mongoose = require("mongoose");

const dokterSchema = new mongoose.Schema({
    nama: String,
    spesialis: String,
    pengalaman: String,
    detail_info: String,
    harga: String,
    id_jadwal: { type: mongoose.Schema.Types.ObjectId, ref: 'jadwal'}
},
{
    collection: "dokter"
});

module.exports = mongoose.model("dokter", dokterSchema);