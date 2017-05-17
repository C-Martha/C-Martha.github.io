import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
require('../style/About.css');
import codehangar from '../images/codehangar.png';
import sofriendly from '../images/sofriendly.png';


function ExperienceComponent(props) {
    return (
        <div>
            <img className="experience-image" src={props.company == "SoFriendly" ? sofriendly : codehangar} />
            <div className="experience-title">
                <CardTitle title={props.title} subtitle={props.company} />
                <CardText >
                    {props.description}
                </CardText>
            </div>
        </div>
    )
}

export default ExperienceComponent; 