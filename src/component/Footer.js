import React from 'react';
import { Link } from 'react-router-dom'


function Footer(){
    return(
        <React.Fragment>
            <footer>
                <div className="footer-slider">
                    <img src="img/slider-img-1.png" className="slider-img-1" alt="pic-1"/>
                    <img src="img/slider-img-2.png" className="slider-img-2" alt="pic-2"/>
                    <img src="img/slider-img-3.png" className="slider-img-3" alt="pic-3"/>
                    <img src="img/slider-img-4.png" className="slider-img-4" alt="pic-4"/>
                </div>

                <div className="footer-blk">
                    <br/>
                    <ul>
                        <li><Link to="/" className="footer-links">home</Link></li>
                        <li><Link to="/about" className="footer-links" >about</Link></li>
                        <li><Link to="/blog" className="footer-links" >blog</Link></li>
                        <li><Link to="/services" className="footer-links" >services</Link></li>
                        <li><Link to="/getintouch" className="footer-links" >get in touch</Link></li>
                    </ul>
                    <br/>
                    <p className="footer-blk-p">© 2016-2021 All Rights Reserved, Delia Holiday
                    <br/>Designed by Marlow</p>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer