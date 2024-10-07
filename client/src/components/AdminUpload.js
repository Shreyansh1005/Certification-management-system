import React, { useState } from 'react';
import { uploadCertificates } from '../services/api';
import './AdminUpload.css';

const AdminUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); 
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select an Excel file');
            return;
        }
        try {
            const response = await uploadCertificates(file);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error uploading file');
        }
    };

    return (
        <div className='upload-container'>
            <h1>Upload Student Certificates</h1>

            <div className="file-input-container">
                <input type="file" id="file-input" onChange={handleFileChange} accept=".xlsx" />
                <label htmlFor="file-input" className="custom-file-label">
                    Choose File
                </label>
            </div>

            <button className="upload-btn" onClick={handleUpload}>Upload</button>

            {message && <p className="upload-message">{message}</p>}
        </div>
    );
};

export default AdminUpload;  // Make sure it's a default export
