import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


function ExperienceComponent(props) {
    return (
        <Card>
            <CardHeader title="Experience"  />
            <CardTitle title={props.title} subtitle= {props.company} />
            <CardText>
                {props.description}
            </CardText>
        </Card>
    )
}

export default ExperienceComponent; 