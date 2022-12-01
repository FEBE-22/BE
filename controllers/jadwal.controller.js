const jadwalSchema = require("../schema/jadwal");

module.exports = {
    createJadwal: async (req, res) => {
        const { hari, waktu } = req.body;

        try {
            const data = await jadwalSchema.create({
                hari: hari,
                waktu: waktu
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'You have successfully create jadwal'
                })
            } else {
                res.status(400).json({
                    message: 'Data failed to add'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    getAllJadwal: async (req, res) => {
        try {
            const data = await jadwalSchema.find({})

            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'Get All data Jadwal Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: data,
                    message: 'Jadwal Not Found'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    getJadwalById: async (req, res) => {
        try {
            const data = await jadwalSchema.findById(req.query.id)

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Get Jadwal Success'
                })
            } else {
                res.status(400).json({
                    message: 'Failed get data Jadwal'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    updateJadwal: async (req, res) => {
        const { hari, waktu } = req.body;

        try {
            const data = await jadwalSchema.findById(req.query.id);

            if (data) {
                data.hari = hari;
                data.waktu = waktu;

                const updateData = await data.save();

                res.status(200).json({
                    data: updateData,
                    message: 'Update data jadwal is succes'
                })
            } else {
                res.status(400).json({
                    message: 'Failed update data Jadwal'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    deleteJadwalById: async (req, res) => {

        try {
            const data = await jadwalSchema.findById(req.query.id);

            if (data) {
                await data.remove();
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Data Jadwal delete'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data not found'
                })

            }
        } catch (error) {
            res.send(error);
        }
    },
}