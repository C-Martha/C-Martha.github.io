import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
require('../style/About.css');

import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import { lightBlue100 } from 'material-ui/styles/colors';

import AboutComponent from './AboutComponent';
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
          <h1 className="title "><FontIcon className="material-icons mdi-48px" color={lightBlue100} style={iconStyles}>work</FontIcon>  Work Experience </h1>

          <ExperienceComponent
            company="SoFriendly"
            title="Software Developer Intern "
            time="June - December 2016"
            description="Developed and Design websites using Webflow and Worpress" />

          <ExperienceComponent
            company="Code Hangar"
            title="Software Developer Intern "
            time="January - March 2017"
            description="Collaborated in the development of RQLPro, a GUI application for Windows, OSX and Linux. "
          />
        </Card>



        <Card className="card">
          <h1 className="title"> <FontIcon className="material-icons mdi-48px" color={lightBlue100} style={iconStyles}>school</FontIcon>  Education </h1>
          <EducationComponent
            university="University of Central Florida"
            degree="Bachelors of Computer Science"
            graduation="Graduated May 2017" />

        </Card>


        <AboutComponent />

      </div>

    );
  }
}

export default App;
