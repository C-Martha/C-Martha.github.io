import React from 'react';
require('../style/style.css');
import SocialMediaComponent from './SocialMediaComponent';


class IntroComponent extends React.Component {

    render(){
        return (
        <div id="introComponent">
             <h1 className="helloWorldHeader">//Hello World </h1>
             <h1 className="nameHeader">Martha Cornejo </h1>
             <div className="social-section"><SocialMediaComponent/> </div>
        </div>
        );
    }

}

export default IntroComponent; 