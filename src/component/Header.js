import React from 'react';
import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="main-container">
            
            <header className="header-container">
                <div className="header">
                <div className="oval-bottom"></div>
                <span className="logo">Delia 
                <br/>Holiday</span>
                <div className="oval-top"></div>
                <p className="headline">I'm one badass life coach.</p>
                </div>
            </header>
            <nav className="nav-container">
                <ul>
                    <li><Link to="/" className="nav-links">home</Link></li>
                    <li><Link to="/about" className="nav-links">about</Link></li>
                    <li><Link to="/blog" className="nav-links">blog</Link></li>
                    <li><Link to="/services" className="nav-links">services</Link></li>
                    <li><Link to="/getintouch" className="nav-links">get in touch</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header