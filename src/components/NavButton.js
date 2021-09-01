import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import '../styles/NavButton.css';

const NavButton = ({ name }) => {

    const { isDark } = useContext(AppContext);
    const mode = isDark ? "navButton darkMode" : "navButton lightMode";

    return(
        <div className="navDiv">
            <button className={ mode }>
                { name }
            </button>
        </div>
    )    
}

export default NavButton;