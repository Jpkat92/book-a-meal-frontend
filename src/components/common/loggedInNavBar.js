import React from 'react';
import { Link } from 'react-router-dom';


const LoggedInNavBar = ({username}) => {
    return(
        <div id="nav"> 
            <ul>
                <li style={{'float':'left'}}><Link to="/"><b>Book-A-Meal</b></Link></li>
                <li style={{'float':'right'}}><Link to='/signin'>Sign out</Link></li>
                <li style={{'float':'right', 'margin':'15px'}}>Welcome <strong>{username}</strong></li>
            </ul>
        </div>
    );
} 

export default LoggedInNavBar;
