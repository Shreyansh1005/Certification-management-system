const Certificate = require('../models/Certificate');

// Fetch certificate details by ID

const getCertificateById = async (req, res) => {
    try {
        const certificate = await Certificate.findOne({ certificateID: req.params.id });
        if (!certificate) {
            return res.status(404).json({ message: 'Certificate not found' });
        }
        res.json(certificate);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Download certificate as PDF (placeholder for now)
exports.downloadCertificate = async (req, res) => {
    try {
        const certificate = await Certificate.findOne({ certificateID: req.params.id });
        if (!certificate) {
            return res.status(404).json({ message: 'Certificate not found' });
        }

        // Add PDF generation logic here (using jsPDF or other tools)
        res.status(200).json({ message: 'Certificate PDF generation coming soon' });
    } catch (error) {
        res.status(500).json({ message: 'Error downloading certificate', error: error.message });
    }
};


module.exports = {
    getCertificateById,
};