import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Admin: Upload Excel File
export const uploadCertificates = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return await axios.post(`${API_URL}/admin/upload`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};

// Student: Get Certificate by ID
export const getCertificateById = async (id) => {
    return await axios.get(`${API_URL}/student/certificate/${id}`);
};

// Student: Download Certificate (this will be enhanced later for PDF generation)
export const downloadCertificate = async (id) => {
    return await axios.get(`${API_URL}/student/certificate/${id}/download`);
};
