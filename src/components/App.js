require('../style/About.css');

import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import AboutComponent from './AboutComponent';
import ExperienceComponent from './ExperienceComponent';
import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IntroComponent from './IntroComponent';


class App extends React.Component {
  render() {
    return (
      <div>
        <IntroComponent />
        {/*<AboutComponent />*/}

        <h1> What I've been up to </h1'
        <Card className="card">
      
          {/*<CardHeader  title="What I've been up to"/>*/}
          <ExperienceComponent company="SoFriendly"
            title="Developer Intern "
            time="June - December 2016"
            description="Developed and Design websites using Webflow and Worpress" />
          <Divider/>
          <ExperienceComponent company="Code Hangar"
            title="Developer Intern "
            time="January - March 2017"
            description="Collaborated in the development of RQLPro, a GUI application for Windows, OSX and Linux. "
          />
        </Card>
      </div>
    );
  }
}

export default App;
