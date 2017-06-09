import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
require('../style/About.css');

import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import { lightBlue500 } from 'material-ui/styles/colors';

import SocialMediaComponent from './SocialMediaComponent';
import ExperienceComponent from './ExperienceComponent';
import IntroComponent from './IntroComponent';
import EducationComponent from './EducationComponent';


class App extends React.Component {
  render() {
    const iconStyles = {
      fontSize: '36px'
    };
    return (
      <div>
        <IntroComponent />


        <Card className="card">
          <h1 className="title "><FontIcon className="material-icons mdi-48px" color={lightBlue500} style={iconStyles}>work</FontIcon>  Work Experience </h1>

          <ExperienceComponent
            company="Code Hangar"
            link="http://codehangar.io/"
            title="Software Developer Intern "
            time="January 2017 - March 2017"
            description="Collaborated in the development of RQLPro, a GUI application for Windows, OSX and Linux. "
          />
          
          <ExperienceComponent
            company="SoFriendly"
            link="https://www.sofriendly.com/"
            title="Software Developer Intern "
            time="June 2016 - December 2016"
            description="Developed and Design websites using Webflow and Worpress" />

        </Card>



        <Card className="card">
          <h1 className="title"> <FontIcon className="material-icons mdi-48px" color={lightBlue500} style={iconStyles}>school</FontIcon>  Education </h1>
          <EducationComponent
            university="University of Central Florida"
            degree="Bachelors of Computer Science"
            gradudation="class of 2017"
            link="http://www.cs.ucf.edu/"/>

        </Card>


        <SocialMediaComponent />

      </div>

    );
  }
}

export default App;
