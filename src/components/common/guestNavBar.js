import React from 'react';
import { Link } from 'react-router-dom';


const GuestNavBar = () => {
    return(
        <div id="nav"> 
            <ul>
                <li style={{'float':'left'}}><Link to="/"><b>Book-A-Meal</b></Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/">Sign In</Link></li>
            </ul>
        </div>
    );
} 

export default GuestNavBar;
