import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import AboutComponent  from './AboutComponent';
import ExperienceComponent from './ExperienceComponent'; 

class App extends React.Component{
  render() {
    return (
      <div>
       <AboutComponent />
       <h2 className="category-title"> Experience </h2>
       <ExperienceComponent company="SoFriendly"
                            title = "Developer Intern "
                            time = "June - December 2016"
                            description = "Developed and Design websites using Webflow and Worpress"
        />
  
        <ExperienceComponent company="Code Hangar"
                            title = "Developer Intern "
                            time = "January - March 2017"
                            description = "Collaborated in the development of RQLPro, a GUI application for Windows, OSX and Linux. "
        />
      </div>
    );
  }
}

export default App;
