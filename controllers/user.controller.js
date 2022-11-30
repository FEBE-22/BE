const userSchema = require("../schema/user");
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
    getProfil: async (req, res) => {
        try {
            const data = await userSchema.findById(req.query.id);
            
            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'User is get successfully'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'User is not found.'
                })
            }
        } catch (error) {
            res.status(400).json({
                message: 'Get User By Id Failed!!'
            })
        }

    },

    updateProfil: async (req, res) => {
        const { nama_depan, nama_belakang, no_telp, jenis_kelamin, tempat_lahir, tanggal_lahir, email, alamat } = req.body; //ganti password?

        try {
            const data = await userSchema.findById(req.query.id);

            if (data) {
                data.nama_depan = nama_depan
                data.nama_belakang = nama_belakang
                data.no_telp = no_telp
                data.jenis_kelamin = jenis_kelamin
                data.tempat_lahir = tempat_lahir
                data.tanggal_lahir = tanggal_lahir
                data.email = email
                data.alamat = alamat
                const update = await data.save();

                res.status(200).json({
                    data: update,
                    message: 'Update data user is success'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: null,
                    message: 'Data User Failed to Update'
                })

            }
        } catch (error) {
            res.status(400).json({
                message: 'Update User Failed!!'
            })
        }
    },

    register: async (req, res) => {
        const { nama_depan, nama_belakang, email, password } = req.body;
        let data;

        try {
            const hash = await bcrypt.hash(password, 10);

            const findEmail = await userSchema.findOne({
                email: email,
            });

            if(findEmail){
                return res.status(400).json({
                    success: false,
                    data: findEmail,
                    message: 'Email sudah digunakan'
                })
            }
            if(email.includes("admin")){
                data = await userSchema.create({
                    nama_depan: nama_depan,
                    nama_belakang: nama_belakang,
                    email: email,
                    password: hash,
                    role: 'admin'
                });
            } else {
                data = await userSchema.create({
                    nama_depan: nama_depan,
                    nama_belakang: nama_belakang,
                    email: email,
                    password: hash,
                    role: 'user'
                });
            }

            if (data) {
                res.status(200).json({
                    success: true,
                    data: data,
                    message: 'Register Successfully..'
                })
            } else {
                res.status(400).json({
                    success: false,
                    data: data,
                    message: 'data does not match'
                })
            }
        } catch (error) {
            return res.status(400).json({
                success: false,
                data: findEmail,
                message: 'Email sudah digunakan'
            })
        }

    },

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const checkEmail = await userSchema.findOne({
                email: email,
            });

        if (checkEmail){
            const checkPass = await bcrypt.compare(password, checkEmail.password);

            if (checkPass) {
                const token = jsonwebtoken.sign({
                    email: checkEmail.email
                }, process.env.JWT_KEY );
                
                if(checkEmail.role == 'admin'){
                    res.status(200).json({
                        success: true,
                        token: token,
                        message: 'login Successfully..',
                        id_user: checkEmail._id,
                        role: 'admin',
                        nama: checkEmail.nama_depan + ' ' + checkEmail.nama_belakang,
                        nama_depan: checkEmail.nama_depan,
                        nama_belakang: checkEmail.nama_belakang,
                        email: checkEmail.email, 
                    })
                } else if(checkEmail.role == 'user'){
                    res.status(200).json({
                        success: true,
                        token: token,
                        id_user: checkEmail._id,
                        message: 'login Successfully..',
                        role: 'user',
                        nama: checkEmail.nama_depan + ' ' + checkEmail.nama_belakang,
                        nama_depan: checkEmail.nama_depan,
                        nama_belakang: checkEmail.nama_belakang,
                        email: checkEmail.email, 
                    })
                }
                
            } else{
                res.status(400).json({
                    success: false,
                    message: 'Password wrong'
                })
            }
        } else{
            res.status(400).json({
                message: 'Username wrong'
            })
        }
        } catch (error) {
            res.status(400).json({
                message: 'Login failed!!'
            })
            }

    },
}