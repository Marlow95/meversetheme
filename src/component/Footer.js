import React from 'react';

function Footer(){
    return(
        <React.Fragment>
            <footer>
                <div className="footer-slider">
                    <img src="img/slider-img-1.png" className="slider-img-1" alt="image-1"/>
                    <img src="img/slider-img-2.png" className="slider-img-2" alt="image-2"/>
                    <img src="img/slider-img-3.png" className="slider-img-3" alt="image-3"/>
                    <img src="img/slider-img-4.png" className="slider-img-4" alt="image-4"/>
                </div>

                <div className="footer-blk">
                    <br/>
                    <ul>
                        <li><a className="footer-links" href="#">home</a></li>
                        <li><a className="footer-links" href="#">about</a></li>
                        <li><a className="footer-links" href="#">blog</a></li>
                        <li><a className="footer-links" href="#">services</a></li>
                        <li><a className="footer-links" href="#">get in touch</a></li>
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