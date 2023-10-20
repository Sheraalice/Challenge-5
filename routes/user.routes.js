const express = require('express')
const router = express.Router()
const {createUser, getAllusers, getDetailUser, updateUser} = require('../handler/v1/user')
const { verifyToken } = require('../middleware/verifyToken');

router.post('/',verifyToken, createUser)
router.get('/', getAllusers)
router.get('/:userID', getDetailUser)
router.put('/:userID', verifyToken, updateUser)

module.exports = router