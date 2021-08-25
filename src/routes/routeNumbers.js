const express = require('express')
const router = express.Router()

const numbersCtrl = require('../controllers/numbers')

router.post('/', numbersCtrl.transformNumbers)

module.exports = router;