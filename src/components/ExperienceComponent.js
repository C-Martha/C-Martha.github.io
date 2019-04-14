import React from 'react';
require('../style/style.css');\
import FontIcon from 'material-ui/FontIcon';
import Chip from 'material-ui/Chip';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { indigo900, tealA100 } from 'material-ui/styles/colors';
injectTapEventPlugin();

//style for technologies chips
const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

// take individual list items into an individual chip
function ListItem(props) {
    return <Chip style={styles.chip} backgroundColor={tealA100}> {props.value} </Chip>;
}

function ExperienceComponent(props) {

    //style (size) for icon
    const iconStyles = {
        fontSize: '18px'
    };

    // technologies list with key
    const technologies = props.technologies;
    const listItems = technologies.map((technologies) =>
        <ListItem key={technologies.toString()}
            value={technologies} />
    );

    return (

        <div className="section">
            <div className="experience-info">
                <h2> <a target="_blank" href={props.link} >{props.company}</a> </h2>
                <h3> {props.title} </h3>

                <p className="date">
                    <FontIcon className="material-icons " style={iconStyles} color={indigo900} >date_range</FontIcon>
                    {props.time} </p>

                <p> {props.description}</p>

                <div style={styles.wrapper}>  {listItems} </div>

            </div>
        </div>
    );
}

export default ExperienceComponent; 