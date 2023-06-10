import React from 'react';
import './help.css';
const Help = () => {
    return(
        <>
            <div className="helpcontainer1">
                <h1>Home Page</h1>
                <p>The home page is the main page of our website.As a user, if you want to music, you can listen to it for free.If you
                    want to listen to music for free, you will only be allowed to listen to a few songs.
                </p>
            </div>
            <div className="helpcontainer2">
                <h1>About Page</h1>
                <p>On the aout page , we describe the contents of our website.</p>
            </div>
            <div className="helpcontainer2">
                <h1>Pages</h1>
                <p>In Pages,we list other platforms of our music player.</p>
            </div>
            <div className="helpcontainer2">
                <h1>News Page</h1>
                <p>On the News page, we describe what has been added to our website, how updates have been made, and what plans we are working on.</p>
            </div>
            <div className="helpcontainer2">
                <h1>Contact Page</h1>
                <p>On the contact page, users can send a direct message to tell us about the difficulties 
                    they have in sing our website, how convenient it is , and what their neeeds are.
                </p>
            </div>
        </>
        
    )
}



export default Help;