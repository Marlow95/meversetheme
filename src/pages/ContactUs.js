import React from 'react';

function ContactUs(){

    const mainStyles = {
        textAlign: 'center',
        color: 'white',
        backgroundColor: '#6A68CC', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }

    const contactStyles = {
        backgroundColor: '#302EA5',
        borderRadius: '20px',
        width: '500px', 
        margin: '30px',
        padding: '20px'
    }

    const contactHeading = {
        fontFamily:'Love Ya Like A Sister'
    }

    const inputStyles = {
        margin: '10px',
        border: 'none',
        borderRadius: '5px',
        padding: '10px'
    }  
    
    const textArea = {
        border: 'none',
        borderRadius: '5px',
        padding: '10px'
    }

    return (
        <div style={mainStyles}>
            <h1 style={contactHeading}>Contact Us</h1>
            <form style={contactStyles}>
                Full Name<br/>
                <input style={inputStyles} type="text" placeholder="Name" name="fullname"/><br/>
                E-mail<br/>
                <input style={inputStyles} type="email" placeholder="E-mail" name="email"/><br/>
                <textarea style={textArea} placeholder="Message" name="message"/><br/>
                <button>Get in Touch</button>
            </form>
        </div>

    )
}

export default ContactUs