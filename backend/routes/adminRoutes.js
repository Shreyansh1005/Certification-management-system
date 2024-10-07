const express = require('express');
const { uploadCertificates } = require('../controllers/adminController');
const upload = require('../middleware/uploadMiddleware');
const router = express.Router();

router.post('/upload', upload.single('file'), uploadCertificates);

module.exports = router;
