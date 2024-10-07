const XLSX = require('xlsx');
const Certificate = require('../models/Certificate');

// Upload Excel file and parse it to save certificate data
exports.uploadCertificates = async (req, res) => {
    try {
        const file = req.file;

        // Read the uploaded Excel file
        const workbook = XLSX.readFile(file.path);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);

        // Process each row and save to database
        const certificates = data.map(row => ({
            certificateID: row.certificateID,
            name: row.name,
            course: row.course,
            issueDate: new Date(row.issueDate),
            status: row.status || 'valid'
        }));

        await Certificate.insertMany(certificates);
        res.status(201).json({ message: 'Certificates uploaded successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading certificates', error: error.message });
    }
};
