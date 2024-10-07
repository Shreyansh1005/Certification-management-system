import React, { useState } from 'react';
import { getCertificateById } from '../services/api';
import { QRCodeCanvas } from 'qrcode.react'; // Correct import for QRCodeCanvas
import CertificateDetails from './CertificateDetails';
import './CertificateVerification.css';

const CertificateVerification = () => {
    const [certificateID, setCertificateID] = useState('');
    const [certificate, setCertificate] = useState(null);
    const [verificationStatus, setVerificationStatus] = useState('');
    const [error, setError] = useState('');

    const handleVerification = async () => {
        try {
            const response = await getCertificateById(certificateID);
            if (response.data) {
                setCertificate(response.data);
                setVerificationStatus('Certificate is valid');
                setError('');
            } else {
                setVerificationStatus('Certificate is invalid');
                setCertificate(null);
            }
        } catch (err) {
            setError('Verification failed. Certificate not found.');
            setCertificate(null);
            setVerificationStatus('');
        }
    };

    return (
        <div className="verification-container">
            <h2>Certificate Verification</h2>

            <div className="input-container">
                <input
                    type="text"
                    value={certificateID}
                    onChange={(e) => setCertificateID(e.target.value)}
                    placeholder="Enter Certificate ID for Verification"
                    className="input-field"
                />
            </div>

            <button className="button" onClick={handleVerification}>
                Verify Certificate
            </button>

            {error && <p className="error-message">{error}</p>}
            {verificationStatus && <p className={`verification-status ${verificationStatus.includes('valid') ? 'valid' : 'invalid'}`}>{verificationStatus}</p>}
            
            {certificate && (
                <>
                    <CertificateDetails certificate={certificate} />
                    {/* <div className="qr-code-container">
                        <h3>Scan QR to Verify</h3>
                        <QRCodeCanvas value={certificateID} />
                    </div> */}
                </>
            )}
        </div>
    );
};

export default CertificateVerification;
