import React from 'react';
import LoggedInNavBar from './loggedInNavBar'
import GuestNavBar from './guestNavBar'


const Header = ({authStatus, profile}) => {
    let navBar; 
    if(authStatus > 0){
        navBar = <LoggedInNavBar username={profile.firstName}/>
    } 
    else {
        navBar = <GuestNavBar/>
    }
    return(
    <div>
        {navBar}
    </div>
    );
};

export default Header;
