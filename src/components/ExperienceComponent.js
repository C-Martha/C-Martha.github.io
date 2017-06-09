import React from 'react';
require('../style/About.css');
import { Card, CardActions, CardHeader, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import { lightBlue500 } from 'material-ui/styles/colors';


function ExperienceComponent(props) {

    const iconStyles = {
        fontSize: '18px'
    };

    return (
        <div className="section">
            <div className="experience-info">
                <h2> <a href={props.link} >{props.company}</a> </h2>
                <h3> {props.title} </h3>

                <p className="date"> <FontIcon className="material-icons " style={iconStyles} color={lightBlue500} >date_range</FontIcon>
                    {props.time} </p>

                <p> {props.description}</p>
            </div>
            <Divider inset={true} />
        </div>
    );
}

export default ExperienceComponent; 