import React from 'react';
require('../style/About.css');
import githubImage from "../images/github.png"
import linkedImage from "../images/linkedin.png"
import twitterImage from "../images/twitter.png"

function SocialMediaComponent(props) {

    return (

            <div className="social-content">
                <img className="social-item" src = { githubImage } />
                <img className="social-item" src = { linkedImage } />
                <img className="social-item" src = { twitterImage } />
            </div>

    );
}


export default SocialMediaComponent;
