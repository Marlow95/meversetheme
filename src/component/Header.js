import React from 'react';


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
                    <li><a className="nav-links" href="#">home</a></li>
                    <li><a className="nav-links" href="#">about</a></li>
                    <li><a className="nav-links" href="#">blog</a></li>
                    <li><a className="nav-links" href="#">services</a></li>
                    <li><a className="nav-links" href="#">get in touch</a></li>
                </ul>
            </nav>
        
        </div>
    )
}

export default Header