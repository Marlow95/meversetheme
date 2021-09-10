import React from 'react';

function BodyThree(){
    return(
        <React.Fragment>
            <div><h1 className="community">Our Community of Support</h1></div>
            <img src="img/arrow.png" className="arrow" alt="the-arrow"/>
            <div className="content-three">
                <div className="infographic-container">
                    <div>
                        <h1 className="infographic-content-heading">What makes our community unique <br/> and what it means for you</h1>
                        <p className="infograpic-paragraph">
                        We help you in the journey of discovering yourself by providing you with not only the information 
                        and mentorship you may need but also the support of a community. While some of these you have to pay for we also offer 
                        free courses to that are managed through the help of volunteers. We are a for-profit company with some non-profit programs.
                        </p>
                        <img className="infographic-illustration" src="/img/Illustration.png" alt="illustration"/>
                        <h1 className="infographic-content-heading">Why join us</h1>
                        <p className="infograpic-paragraph">
                        If you are a woman no matter your age. We provide an engaging environment where NOT only you can network with each other but 
                        you can grow with strong and knowligable female mentors.
                        </p>
                    </div>
                    <div>
                        <h3 className="infographic-title">OBJECTIVE</h3>
                        <p className="infograpic-paragraph-obj">To create a supportive environment for women to be themselves and help empower each other.
                        <br/>GO GIRL POWER!</p>
                        <h3 className="infographic-title">HOW TO JOIN</h3>
                        <p className="infograpic-paragraph-join">To get access to some of our groups just click on the "Groups Button".</p>
                    </div>
                    <div>
                        <h1 className="infographic-philosophy">Our Philosophy</h1>
                        <img className="infographic-pic" src="/img/group.png" alt="group" />
                        <p className="infograpic-paragraph">Our goal is to provide other women with the knowledge to do 4 very simple things with their life:</p>
                        <ol>
                            <li className="infographic-list">EMPOWER</li>
                            <li className="infographic-list">ENGAGE</li>
                            <li className="infographic-list">SUPPORT</li>
                            <li className="infographic-list">GROW</li>
                        </ol>
                        <p className="infograpic-paragraph">Far too many of use lack these simple things.</p>
                    </div>     
                </div>
            </div>
        </React.Fragment>
    )
}

export default BodyThree 