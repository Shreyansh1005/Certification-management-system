import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminUpload from './components/AdminUpload';
import SearchCertificate from './components/SearchCertificate';
import Header from './components/Header';
import Layout from './components/Layout'; // Keep Layout here
import LandingPage from './components/LandingPage'; // Import Landing Page
import CertificateVerification from './components/CertificateVerification'; 

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header /> {/* Adding Header */}
                <div className="main-content">
                    <Layout>
                        <Routes>
                            <Route path="/" element={<LandingPage />} /> {/* Landing Page */}
                            <Route path="/admin/upload" element={<AdminUpload />} />
                            <Route path="/student/search" element={<SearchCertificate />} />
                            <Route path="/verify" element={<CertificateVerification />} />
                        </Routes>
                    </Layout>
                </div>
            </div>
        </Router>
    );
}

export default App;
