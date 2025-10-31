import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        setScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`main-header ${scrolled ? 'fixed-header' : ''}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner">
                        <div className="logo">
                            <a href=""><h2>Gopal</h2></a>
                        </div>
                        <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav className={`main-menu ${menuOpen ? 'open' : ''}`}>
                            <ul>
                                <li className="current"><a href="#home">Home</a></li>
                                <li><a href="#about">About</a></li>
                                <li><a href="#services">Services</a></li>
                                <li><a href="#portfolio">Portfolio</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {/* <nav className={`main-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className="current"><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav> */}
        </header>
    );
}
