import React from 'react';

function BodyTwo(){
    return (
        <React.Fragment>
            <div class="content-two">

                <div class="purple-blk"></div>
                <img src="img/polygon.png" class="purple-blk-shape"/>
                <div><p class="post-title-front">Top Rated Stories</p></div>

                <div class="post-container">
                    <div class="post-card-1"><img src="img/img-1.png" class="card-img-1" alt="dreams"/><h2>The Road to Achieve Your Dreams</h2>
                    <span class="card-info"></span><span class="card-btn-1"><a href="#">Read</a></span>
                    </div>

                    <div class="post-card-exclusive"><img src="img/post-img-2.png" class="card-img-2" alt="support-post"/><h2>How to Find A Supportive Community</h2>
                    <span class="card-info"></span><span class="card-btn-2"><a href="#">Read</a></span>
                    </div>

                    <div class="post-card-last"><img src="img/post-img-3.png" class="card-img-3" alt="confidence-post"/><h2>How to Make Yourself Feel Beautiful Everyday</h2>
                    <span class="card-info"></span><span class="card-btn-3"><a href="#">Read</a></span>
                    </div>
                </div>

                <div class="info-card">
                    <img className="info-card-img" src="img/levitate.png"/>
                    <p className="info-card-p">
                        Delia and her team strive to create a <span className="blue">supportive community</span> for women. So, us girls can have a safe place to be ourselves.
                        And talk about our problems and fears <span className="blue">without the fear of judgement and persecution that society sometimes gives us.</span> 
                        <br/>
                        <br/>
                        All of us women should have a <span className="blue">safe place</span> to own up to our mistakes so we can can grow as women. 
                        Delia is a woman on a mission to provide this enviroment for all women especially, young women with little support.
                    </p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default BodyTwo