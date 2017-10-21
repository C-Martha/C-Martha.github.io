import React from 'react';
require('../style/style.css');
import githubImage from "../images/github.png"
import linkedImage from "../images/linkedin.png"
import twitterImage from "../images/twitter.png"


function SocialMediaComponent(props) {
    return (
        <div>
           <h3 className="section-title"> <i className="em em-wave"></i>  Get in touch.</h3>
        <div className="social-content">
           <a target="_blank" href="https://github.com/C-Martha"><img className="social-item" src = { githubImage } /> </a>
           <a target="_blank" href="https://www.linkedin.com/in/cornejomartha"><img className="social-item" src = { linkedImage } /> </a>
           <a target="_blank" href="https://twitter.com/marthawxyz"><img className="social-item" src = { twitterImage } /> </a>
        </div>
        </div>
    );
}


export default SocialMediaComponent;
