const dokFavSchema = require("../schema/dokterFav");
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
   createDokFav: async (req, res) => {
        const id_user = req.queri.id_user;
        const id_dokter = req.queri.id_dokter;

        try {
            const data = await dokFavSchema.create({
                id_user: id_user,
                id_dokter: id_dokter
            });
            console.log(id_user);

            if (data) {
                console.log("test");
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Dokter berhasil di favorit'
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
    
   getAllDokFav: async (req, res) => {
        try {
            const data = await dokFavSchema.find({ }, 'nama spesialis pengalaman')

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
    
    
}