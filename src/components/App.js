import React from 'react';
require('../style/style.css');

import IntroComponent from './IntroComponent';
import ProjectsComponent from './ProjectsComponent'; 

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faTwitter, faGithub, faLinkedin)

class App extends React.Component {
  render() {
    
    //style (size) for icons 
    const iconStyles = {
      fontSize: '36px'
    };
    
    return (
      <div>
        <IntroComponent />
        <ProjectsComponent/>
      </div>

    );
  }
}

export default App;
