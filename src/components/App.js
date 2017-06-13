import React from 'react';
require('../style/style.css');

import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';

import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import { indigo900 } from 'material-ui/styles/colors';

import SocialMediaComponent from './SocialMediaComponent';
import ExperienceComponent from './ExperienceComponent';
import IntroComponent from './IntroComponent';
import EducationComponent from './EducationComponent';


class App extends React.Component {
  render() {
    
    //style (size) for icons 
    const iconStyles = {
      fontSize: '36px'
    };

    // List for technologies used at work
    const technologiesCH = ["React", "Redux", "Javascript", "Bootstrap", "HTML", "Git"]; 
    const technologiesSF = ["Webflow", "Wordpress", "PHP", "Designer"];
    
    
    return (
      <div>
        <IntroComponent />

        <Card className="card">
          <h1 className="title "><FontIcon className="material-icons mdi-48px" color={indigo900} style={iconStyles}>work</FontIcon>  Work Experience </h1>
          <ExperienceComponent
            company="Code Hangar"
            link="http://codehangar.io/"
            title="Software Developer Intern"
            time="January 2017 - March 2017"
            technologies = { technologiesCH }
            description="Joined the team of developers at Code Hangar where I helped contribute to the release of a new version of ReQLPro. ReQLPro is a RethinkDB GUI Client for Mac, Windows, and Linux. While working there I also had the opportunity to be part of sprint meetings and pair programming sessions. "/>

          <Divider inset={true} />

          <ExperienceComponent
            company="SoFriendly"
            link="https://www.sofriendly.com/"
            title="Software Developer Intern "
            time="June 2016 - December 2016"
            technologies = { technologiesSF }
            description="While interning at SoFriendly I had the chance to work on building websites using Webflow and Wordpress for clients. Aside from the design and technical skills that I learned during my intership at SoFriendly, another big take away was becoming a more confident developer thanks to the support and motivation from the team." />
        </Card>

        <Card className="card">
          <h1 className="title"> 
            <FontIcon className="material-icons mdi-48px" color={indigo900} style={iconStyles}>school</FontIcon>  Education </h1>
          <EducationComponent
            university="University of Central Florida"
            degree="Bachelors of Science in Computer Science"
            graduation="Earned May 2017"
            link="http://www.cs.ucf.edu/" />
        </Card>

        <SocialMediaComponent />
      </div>

    );
  }
}

export default App;
