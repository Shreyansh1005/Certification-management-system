// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer'; // Adjust the import path as necessary

const Layout = ({ children }) => {
    const location = useLocation();
    
    // Define routes where you want to hide the footer
    const hideFooterRoutes = ['/verify', '/details', '/student/search'];

    // Check if the current location is in the hideFooterRoutes array
    const showFooter = !hideFooterRoutes.includes(location.pathname);

    return (
        <div>
            {children}
            {showFooter && <Footer />}
        </div>
    );
};

export default Layout;
