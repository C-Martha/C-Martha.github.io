import React from 'react';
require('../style/style.css');
import introImage from '../images/header2.png'; 


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