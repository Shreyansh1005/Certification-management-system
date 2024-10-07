// studentRoutes.js

const express = require('express');
const { getCertificateById } = require('../controllers/studentController');
const router = express.Router();

// Route to get certificate by ID
router.get('/certificate/:id', getCertificateById);

module.exports = router;
