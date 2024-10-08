import React, { useState } from 'react';
import '../CSS/Navebar.css'
import { FaBars, FaTimes } from 'react-icons/fa';

function Navebar() {
    const [isMobile, setIsMobile] = useState(false);

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="nav">
            <h3 className="logo">Sachin Raj</h3>
            <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'}
                onClick={() => setIsMobile(false)}>
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#projects" className="nav-link">Projects</a></li>
                <li><a href="#skills" className="nav-link">Skills</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            <button className="mobile-menu-icon" onClick={handleToggle}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </nav>
    );
};

export default Navebar;