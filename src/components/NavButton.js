import React from 'react';

import '../styles/NavButton.css';

const NavButton = ({ name }) => {

    return(
        <div className="navDiv">
            <button className="navButton">
                { name }
            </button>
        </div>
    )    
}

export default NavButton;