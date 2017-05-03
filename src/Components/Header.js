import React, {Component} from 'react'; 
import headerImage from '../Style/MarthaCornejo1.png'; 

export class Header extends Component{

    render(){

        return (
             <div>
                 <img src={headerImage} alt="bannerImage" className="bannerImage"></img>
             </div>
        );
    }

}