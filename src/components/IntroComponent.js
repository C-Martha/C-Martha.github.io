import React from 'react';
require('../style/About.css');
import introImage from '../images/introImage.png'; 


class IntroComponent extends React.Component {

    render(){
        return (
        <div>
             <img className="introImage" src = { introImage } />
        </div>
        );
    }

}

export default IntroComponent; 