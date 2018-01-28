import React from 'react';
require('../style/style.css');

import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';

import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import { indigo900 } from 'material-ui/styles/colors';

import SocialMediaComponent from './SocialMediaComponent';
import IntroComponent from './IntroComponent';
import ProjectsComponent from './ProjectsComponent'; 


class App extends React.Component {
  render() {
    
    //style (size) for icons 
    const iconStyles = {
      fontSize: '36px'
    };
    
    return (
      <div>
  
        
        <IntroComponent />
        <div><h4 className="title"> The Fun Stuff! </h4></div>
        <ProjectsComponent/>

        <div className="social-section"><SocialMediaComponent/> </div>
      </div>

    );
  }
}

export default App;
