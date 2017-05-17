require('../style/About.css');

import React from 'react';
import introImage from '../images/introImage.png'; 


class IntroComponent extends React.Component {

    render(){
        return (
        <div className="intro-image">
             <img src = { introImage } />
        </div>
        );
    }

}

export default IntroComponent; 