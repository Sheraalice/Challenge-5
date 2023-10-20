const express = require('express')
const router = express.Router()
const {createTransaction, getAlltransactions, getDetailtransaction} = require('../handler/v1/transaction')
const { verifyToken } = require('../middleware/verifyToken');

router.post('/', verifyToken, createTransaction)
router.get('/', getAlltransactions)
router.get('/:transactionID', getDetailtransaction)

module.exports = router