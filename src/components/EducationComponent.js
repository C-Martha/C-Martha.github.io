import React from 'react'; 
require('../style/style.css');


function EducationComponent(props) {
    
        return (
            
            <div className="section">
                <h2> <a target="_blank" href= {props.link } > { props.university } </a></h2>
                <h3> { props.degree } </h3>
                <h4> { props.graduation } </h4>
            </div>


        );
    }


export default EducationComponent; 