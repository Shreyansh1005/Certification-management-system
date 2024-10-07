const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const adminRoutes = require('./routes/adminRoutes');
const studentRoutes = require('./routes/studentRoutes');
const upload = require('./middleware/uploadMiddleware');
const Certificate = require('./models/Certificate');  // Add the certificate model
const authRoutes = require('./routes/authRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/student', studentRoutes);

// File upload route
app.post('/api/admin/upload', upload.single('file'), async (req, res) => {
    try {
        const certificates = req.body.certificates; // Assuming you are handling Excel file parsing here

        // Log the incoming certificate data for debugging
        console.log(certificates); 

        // Insert the certificates into the database
        const newCertificates = await Certificate.insertMany(certificates);
        res.status(200).json({ message: 'Certificates uploaded successfully', data: newCertificates });
    } catch (error) {
        console.error(error); // Logs the error in the console for further debugging
        res.status(400).json({ message: 'Error uploading certificates', error: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;  // Export the app instead of router
