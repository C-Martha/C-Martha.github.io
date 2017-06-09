import React from 'react';
require('../style/About.css');
import githubImage from "../images/GitHub.png"
import linkedImage from "../images/linkedin.png"
import twitterImage from "../images/twitter.png"

function AboutComponent(props) {

    return (
        <div>
            <img src = { githubImage } />
             <img src = { linkedImage } />
              <img src = { twitterImage } />
            <p> dlfkajdlfkaj dslfkjaldkfjadfalkdfj sdjflk </p>
        </div>
    );
}


export default AboutComponent;
