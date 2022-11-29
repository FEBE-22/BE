const formKeluhanSchema = require("../schema/formKeluhan");
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
    inputDataForm: async (req, res) => { // input sama seperti create ??
        const { nama_lengkap, email, keluhan } = req.body;

        try {
            const data = await formKeluhanSchema.create({
                nama_lengkap: nama_lengkap,
                email: email,
                keluhan: keluhan
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    Message: 'Keluhan anda terkirim'
                })
            } else {
                res.status(400).json({
                    message: 'Gagal terkirim'
                })
            }
        } catch (error) {
            res.send(error)
        }
    }
}