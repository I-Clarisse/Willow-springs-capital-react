import React from 'react';
import Navbar from '../components/Navbar';
// import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">

            <Navbar/>
            <footer className="footer">
                <p>&copy; 2025 Willow Springs Capital. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;