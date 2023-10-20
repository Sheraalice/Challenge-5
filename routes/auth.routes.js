const express = require('express');
const router = express.Router();
const { register, login, authenticate } = require('../handler/v1/auth');
const { verifyToken } = require('../middleware/verifyToken');

router.post('/register', register);
router.post('/login', login);
router.get('/authenticate', verifyToken, authenticate);

module.exports = router;