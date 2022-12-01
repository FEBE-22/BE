const pembayaranSchema = require("../schema/pembayaran");
const midtransClient = require('midtrans-client');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    requestPayment: async (req, res) => {
        const { id_user, id_dokter, total } = req.body;

        let snap = new midtransClient.Snap({
            // Set to true if you want Production Environment (accept real transaction).
            isProduction : false,
            serverKey : process.env.SERVER_MIDTRANS_KEY
        });

        let randomId = uuidv4();

        let parameter = {
            transaction_details: {
                order_id: "user" + randomId,
                gross_amount: total
            },
            credit_card:{
                secure : true
            },
            customer_details: {
                first_name: id_dokter,
                id_user: id_user
            }
        };

        snap.createTransaction(parameter)
        .then((transaction)=>{
            // transaction token
            let transactionToken = transaction.token;
            const data = pembayaranSchema.create({
                id_dokter: id_dokter,
                id_user: id_user,
                total: total,
                id_midtrans: parameter.transaction_details.order_id
            });

            if (data) {
                res.status(200).json({
                    success: true,
                    token: transactionToken,
                    redirectURL: "https://app.sandbox.midtrans.com/snap/v2/vtweb/" + transactionToken
                })
            } else {
                res.status(400).json({
                    message: 'Pembayaran '
                })
            }

            // res.json({
            //     token: transactionToken,
            //     redirectURL: "https://app.sandbox.midtrans.com/snap/v2/vtweb/" + transactionToken
            // })
        });
    },

}