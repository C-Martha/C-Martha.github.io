import React from 'react';
require('../style/style.css');

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function SocialMediaComponent(props) {
    return (
        <div className="social-content">

           <a target="_blank" href="https://github.com/C-Martha" className="icon"><FontAwesomeIcon icon={['fab', 'github']}/> </a>
           <a target="_blank" href="https://www.linkedin.com/in/cornejomartha" className="icon"><FontAwesomeIcon icon={['fab', 'linkedin']}/></a>
           <a target="_blank" href="https://twitter.com/marthawxyz" className="icon"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        </div>
    );
}


export default SocialMediaComponent;
