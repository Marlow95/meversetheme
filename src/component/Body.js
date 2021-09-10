import React from 'react';

function Body(){
    return(
        <div>
            <div className="content-one">

                <div className="content-items">
                        <div className="img-card">
                            <img src="/img/img-delia.png" className="img-admin" alt="delia"/>
                            <div className="img-background"></div>
                        </div>

                        <div className="lead-header">
                            <p className="lead-header-txt"> Meet Delia On Your Schedule</p>
                        </div>

                        <div className="lead-card">
                            <div className="lead-info">
                                Sign Up for Delia’s Free Webinar <br/>
                                <input className="input-name" type="text" placeholder="Name"/>
                                <br/>
                                <input className="input-email" type="email" placeholder="Email"/>
                                <br/>
                                <br/>
                                <span className="lead-btn"><a href="https://www.google.com/">Be Inspired</a></span>
                            </div>
                        </div>
                </div>

                <div className="content-items">
                    <div className="my-story-title"><p>My Story</p></div>
                    <div className="my-story-card">
                        <div className="my-story-txt">
                            <p> Hi Girls,
                                This is Delia I’m a country girl from Oregon. 
                                But don’t let that fool you. I’m as tough as you can get. 
                                I first went to the city alone at 18. By 20 I found myself pregnant and in an abusive relationship.
                                However, I  am not a victim.  I worked up the courage to get away from that nightmare. 
                                Then  eventually start my own 7-figure fashion business. Not bad for a country kid.
                            </p>
                            <div className="my-story-btn"><a href="https://www.google.com/">Learn More</a></div>
                        </div>
                    </div>
                </div>
                <div className="content-items">
                    <div className="ebook-title"><p>Brand New</p></div>
                    <div className="ebook-card">
                        <div className="ebook-items">
                            <img className="ebook-pic" src="img/delia-book.png" alt="delia-book"/>
                            <p className="ebook-txt">Download the first 3 chapters of Delia’s NEW book for FREE</p>
                            <p className="quote">“EVERY WOMAN SHOULD DISCOVER HER INNER BADASS.”
                                <br/>-DELIA HOLIDAY
                            </p>
                            <button className="download-btn"><a href="https://www.google.com/">Download Now</a></button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Body