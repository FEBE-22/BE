const mongoose = require("mongoose");

const dokFavSchema = new mongoose.Schema({
    id_user: { type: mongoose.Schema.Types.ObjectId, ref: 'user'},
    id_dokter: { type: mongoose.Schema.Types.ObjectId, ref: 'dokter'}
});

module.exports = mongoose.model("dokter_favorit", dokFavSchema);