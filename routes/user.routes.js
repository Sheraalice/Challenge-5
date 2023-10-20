const express = require('express')
const router = express.Router()
const {createUser, getAllusers, getDetailUser} = require('../handler/v1/user')
const { verifyToken } = require('../middleware/verifyToken');

router.post('/',verifyToken, createUser)
router.get('/', getAllusers)
router.get('/:userID', getDetailUser)

module.exports = router