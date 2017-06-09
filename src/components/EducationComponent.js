import React from 'react'; 
require('../style/About.css');


function EducationComponent(props) {
    
        return (
            
            <div className="section">
                <h2> { props.university } </h2>
                <h3> { props.degree } </h3>
                <h4> { props.graduation } </h4>
            </div>


        );
    }


export default EducationComponent; 