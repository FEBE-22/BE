const rikesSchema = require("../schema/rikes");
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
   createRikes: async (req, res) => {
        const { riwayat_penyakit, berat_badan, tinggi_badan, golongan_darah, id_user } = req.body;

        try {
            const data = await rikesSchema.create({
                riwayat_penyakit: riwayat_penyakit,
                berat_badan: berat_badan,
                tinggi_badan: tinggi_badan,
                golongan_darah: golongan_darah,
                id_user: id_user
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'You Have Successfully Created Health History'
                })
            } else {
                res.status(400).json({
                    message: 'Data Failed to Health History'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

   getRikesById: async (req, res) => {
        try {
            const data = await rikesSchema.findById(req.query.id);
            // console.log(req.query.id);
            if(data){
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Health History is Get Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Health History is Not Found.'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Get Health History By Id Failed!!'
            })
        }
    
      },
    
    updateRikes: async (req, res) => {
        const { riwayat_penyakit, berat_badan, tinggi_badan, golongan_darah, id_user } = req.body; 

        try {
            const data = await rikesSchema.findById(req.query.id);

            if (data) {
                data.riwayat_penyakit = riwayat_penyakit
                data.berat_badan = berat_badan
                data.tinggi_badan = tinggi_badan
                data.golongan_darah = golongan_darah
                data.id_user = id_user
                const update = await data.save();

                res.status(200).json({
                    data: update,
                    message: 'Update Data Health History is Success'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data Health History Failed to Update'
                })

            }
        } catch (error) {
            res.status(400).json({
                message: 'Update Health History Failed!!'
            })
        }
    },

    deleteRikes: async (req, res) => {
        try {
            const data = await rikesSchema.findById(req.query.id);

            if (data) {
                await data.remove(); 
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Health history deleted successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data not found'
                })

            }
        } catch (error) {
            res.status(400).json({
                message: 'Delete Health History Failed!!'
            })
        }
    },
    
    
}