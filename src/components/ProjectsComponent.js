import React from 'react';
require('../style/style.css');
import WhizClockImage from "../images/WhizClock.png"
import { Card } from 'material-ui/Card';



function ProjectsComponent(props) {

        return(
            <Card className="whiz-card">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=me.marthacornejo.mathclock"><img className="whizClock" src = { WhizClockImage }/></a> 
            </Card>

        );

}

export default ProjectsComponent; 