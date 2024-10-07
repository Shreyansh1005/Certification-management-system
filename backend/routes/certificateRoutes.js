// Backend: routes/certificateRoutes.js

const express = require('express');
const router = express.Router();
const Certificate = require('../models/Certificate'); // Assuming you have a Certificate model

// Certificate Verification Endpoint
router.get('/verify/:certificateID', async (req, res) => {
    try {
        const certificateID = req.params.certificateID;

        // Find the certificate by certificateID
        const certificate = await Certificate.findOne({ certificateID });

        if (!certificate) {
            return res.status(404).json({ message: 'Certificate not found' });
        }

        // Return the certificate details if found
        res.status(200).json({
            message: 'Certificate is valid',
            certificate: {
                name: certificate.name,
                course: certificate.course,
                issueDate: certificate.issueDate,
                status: certificate.status,
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
});

module.exports = router;
