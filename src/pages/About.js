import React from 'react';

function About(){
    const fontStyle =  {
        fontFamily: 'Poppins'
    }
    const paragraphStyle =  {
        fontFamily: 'Love Ya Like A Sister'
    }
    const styles = {
        backgroundColor: '#6A68CC', 
        borderRadius: '6px',
        color: 'white',
        fontFamily: 'Poppins',
        left: '245px',
        padding: '20px',
        position: 'relative',
        textAlign: 'left',
        width: '1345px',
    }
    return (
        <div>
            <h1 style={fontStyle}>Who's Delia?</h1>
            <div style={styles}>
                <article>
                    <h2 style={paragraphStyle}>How It All Started</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas volutpat mattis lorem eu vulputate. 
                        Vivamus varius consectetur eros mollis dignissim. Donec non ligula purus. Aenean eu nibh sed lorem porta porttitor. 
                        Duis sagittis velit eget nibh viverra, id maximus nibh gravida. Aenean efficitur arcu enim, ut auctor orci tristique consequat. 
                        Sed suscipit est ligula, ac gravida leo faucibus nec. Sed lacus velit, aliquet vitae faucibus ut, pretium eget arcu. 
                        Cras sodales neque a ipsum sagittis condimentum et ut nunc. Fusce tellus ipsum, posuere eu hendrerit a, fringilla a libero.
                    </p>
                    <p>
                        Suspendisse et tincidunt urna. Morbi vestibulum massa sodales erat vehicula pulvinar. 
                        Suspendisse et lobortis elit. Nunc convallis mi sed suscipit imperdiet. Donec quis fringilla nisi. Fusce at tortor ante. 
                        Nam efficitur ipsum leo. Aliquam erat volutpat. Vivamus convallis convallis accumsan. Aliquam in volutpat nulla. 
                        Donec et erat ut nulla commodo dapibus ut a arcu. Maecenas at rhoncus odio. 
                        Proin at lorem imperdiet, consectetur dolor sit amet, hendrerit ex. Donec nec congue quam, id lobortis ex. 
                        Vestibulum aliquam mauris nec erat congue, in aliquet ipsum sodales.
                    </p>
                    <p>
                        Fusce cursus justo sagittis justo cursus viverra. Mauris et aliquet metus. Integer molestie posuere porta. 
                        Nam est lorem, pellentesque quis metus in, ornare condimentum felis. Vivamus vitae eros ornare, efficitur elit sit amet, eleifend velit.
                        Maecenas a mollis lectus, a dignissim nunc. Aliquam tempor, enim id aliquet porta, dolor dolor luctus massa, 
                        eu tincidunt lacus metus id massa. Curabitur vestibulum elementum massa, nec maximus elit porta sed. Suspendisse ligula tortor, 
                        vestibulum ac diam et, tincidunt porttitor sem.
                    </p>
                    <p>
                        Sed blandit a magna non semper. Proin feugiat, sapien sit amet ultrices cursus, sem ligula bibendum justo, eget porttitor nunc urna vel quam. 
                        Ut bibendum quam magna, ac pulvinar nisl iaculis quis. Integer eget lectus justo. Quisque consequat at tortor in tempor. Nulla quis metus fringilla, 
                        finibus urna at, ultricies massa. Donec sit amet erat eu magna auctor dictum sit amet sit amet dolor. Cras quis aliquam purus. Sed felis nunc, 
                        mattis et justo nec, commodo suscipit nunc. Pellentesque eget aliquam augue, vel eleifend ligula. Nullam neque ante, dignissim sed sodales vitae, 
                        aliquam eget libero. Mauris hendrerit odio volutpat, convallis eros non, semper tellus. Duis tristique vehicula sagittis. Donec ornare, neque eget 
                        pellentesque dapibus, purus quam convallis libero, et tempor urna risus at mi.
                    </p>
                    <p> 
                        Ut rutrum augue condimentum, vulputate magna eget, elementum neque. Aliquam eget laoreet lacus, sit amet convallis dui.
                        Nunc sit amet ullamcorper lectus. Nam mauris justo, vestibulum a fringilla et, vehicula a lacus. In ut convallis nulla. 
                        Curabitur eleifend maximus venenatis. Aliquam volutpat urna arcu, in posuere enim congue eu. Aliquam blandit enim nec luctus
                        vulputate. Sed gravida congue augue sit amet malesuada.
                    </p>
                </article>
            </div>
        </div>

    )
}

export default About