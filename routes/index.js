const express = require('express');
const router = express.Router()

const userRouter = require('./user.router');
const dokterRouter = require('./dokter.router');
const rikesRouter = require('./rikes.router');
const pembayaranRouter = require('./pembayaran.router');
const jadwalRouter = require('./jadwal.router');
const formKeluhanRouter = require('./formKeluhan.router');

router.use("/user", userRouter);
router.use("/dokter", dokterRouter);
router.use("/jadwal", jadwalRouter);
router.use("/home", formKeluhanRouter);
router.use("/rikes", rikesRouter);
router.use("/pembayaran", pembayaranRouter);

module.exports = router