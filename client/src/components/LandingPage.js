import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Assuming you want to add custom CSS for the landing page

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="landing-hero">
                <h1>Welcome to the Certificate Management System</h1>
                <p>Easily manage, upload, and search for student certificates.</p>
                <div className="cta-buttons">
                    <Link to="/admin/upload" className="btn-primary">Admin Upload</Link>
                    <Link to="/student/search" className="btn-secondary">Search Certificate</Link>
                    <Link to="/verify" className="btn-primary" >Verify
                </Link>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
