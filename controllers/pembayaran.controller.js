// const pembayaranSchema = require("../schema/pembayaran");
const midtransClient = require('midtrans-client');
const jsonwebtoken = require("jsonwebtoken");

module.exports = {
    requestPayment: async (req, res) => {
        const { nama_dokter, spesialis, pengalaman, harga } = req.body;

        let snap = new midtransClient.Snap({
            // Set to true if you want Production Environment (accept real transaction).
            isProduction : false,
            serverKey : process.env.SERVER_MIDTRANS_KEY
        });

        let parameter = {
            transaction_details: {
                order_id: "YOUR-ORDERID-123456",
                gross_amount: harga
            },
            credit_card:{
                secure : true
            },
            customer_details: {
                first_name: nama_dokter,
                spesialis: spesialis,
                pengalaman: pengalaman,
                harga: harga
            }
        };

        snap.createTransaction(parameter)
        .then((transaction)=>{
            // transaction token
            let transactionToken = transaction.token;
            res.json({
                token: transactionToken,
                redirectURL: "https://app.sandbox.midtrans.com/snap/v2/vtweb/" + transactionToken
            })
        });
    },

}