import React from 'react';
require('../style/About.css');
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import {lightBlue100} from 'material-ui/styles/colors';


function ExperienceComponent(props) {

    const iconStyles = {
        fontSize:'18px'
    };

    return (
        <div className="section">
            <div className="experience-info">
                <h2> {props.company} </h2>
                <h3> {props.title} </h3>
                
                <p> <FontIcon className="material-icons " style={iconStyles} color={lightBlue100} >date_range</FontIcon>
                {props.time} </p>

                <p > {props.description}</p>
            </div>
            <Divider inset={true} />
         </div>
    );
}

export default ExperienceComponent; 