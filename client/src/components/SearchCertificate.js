import React, { useState } from 'react';
import { getCertificateById } from '../services/api';
import CertificateDetails from './CertificateDetails';
import './StudentCertificate.css';

const SearchCertificate = () => {
    const [certificateID, setCertificateID] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [error, setError] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const handleSearch = async () => {
        try {
            const response = await getCertificateById(certificateID);
            setCertificate(response.data);
            setDownloadLink(`/api/student/download/${response.data.certificateID}`); // Set download link
            setError('');
        } catch (err) {
            setError('Certificate not found');
            setCertificate(null);
            setDownloadLink(''); // Reset download link
        }
    };

    return (
        <div className="search-container">
            <h2>Search Certificate</h2>

            <div className="input-container">
                <input
                    type="text"
                    value={certificateID}
                    onChange={(e) => setCertificateID(e.target.value)}
                    placeholder="Enter Certificate ID"
                    className="input-field"
                />
            </div>

            <button onClick={handleSearch}>
                <span> Search
                </span>
            </button>

            {error && <p className="error-message">{error}</p>}
            {certificate && (
                <>
                    <CertificateDetails certificate={certificate} />

                </>
            )}
        </div>
    );
};

export default SearchCertificate;
