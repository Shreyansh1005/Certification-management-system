import React from 'react';
// import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>Certification Management System</h1>
                {/* <nav>
                    <ul>
                        <li><Link to="/admin/upload">Admin Upload</Link></li>
                        <li><Link to="/student/search">Search Certificate</Link></li>
                    </ul>
                </nav> */}
            </div>
        </header>
    );
};

export default Header;
