const dokterSchema = require("../schema/dokter");

module.exports = {
    createDokter: async (req, res) => {
        const { nama, spesialis, pengalaman, detail_info, harga, id_jadwal } = req.body; 

        try {
            const data = await dokterSchema.create({
                nama: nama,
                spesialis: spesialis,
                pengalaman: pengalaman,
                detail_info: detail_info,
                harga: harga,
                id_jadwal: id_jadwal
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'You Have Successfully Created Doctor Data'
                })
            } else {
                res.status(400).json({
                    message: 'Data Failed to Add'
                })
            }
        } catch (error) {
            res.send(error)
        }
    },

    getDokterById: async (req, res) => {
        try {
            const data = await dokterSchema.findById(req.query.id).populate('id_jadwal').exec((err, data) => {
            
            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Dokter is Get Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Dokter is Not Found.'
                })
            }
        })
        } catch (error) {
            res.status(400).json({
                message: 'Get Dokter By Id Failed!!'
            })
        }

    },

    getAllDokter: async (req, res) => {
        try {
            const data = await dokterSchema.find({ }, 'nama spesialis pengalaman')

            if (data) {
                res.status(200).json({
                    data: data,
                    message: 'Get All Dokter Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Dokter is Not Found'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Get All Dokter Failed!!'
            })
        }
    },

    updateDokter: async (req, res) => {
        const { nama, spesialis, pengalaman, detail_info, harga, id_jadwal } = req.body;
        try {
            const data = await dokterSchema.findById(req.query.id);
            if(data){
                data.nama = nama
                data.spesialis = spesialis
                data.pengalaman = pengalaman
                data.detail_info = detail_info
                data.harga = harga,
                data.id_jadwal = id_jadwal
                const updateBooking = await data.save();
                res.status(200).json({
                    data: updateBooking,
                    message: 'The Doctor Data has been Successfully Updated'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Doctor Data is Not Found.'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Update Doctor Data Failed!!'
            })
        }
      },
    
      deleteDokter: async (req, res) => {
        try {
            const data = await dokterSchema.findById(req.query.id);
            if(data){
                await data.remove();
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Doctor Data is Deleted Successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Doctor Data is not found.'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Delete Doctor Data Failed!!'
            })
        }
      }

}