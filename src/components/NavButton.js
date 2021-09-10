import MoveTo from 'moveto';
import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import '../styles/NavButton.css';

const NavButton = ({ name, scrollTarget }) => {

    const { isDark } = useContext(AppContext);
    const mode = isDark ? "navButton darkMode" : "navButton lightMode";

    const moveTo = new MoveTo();
    const target = document.getElementById(scrollTarget);

    new MoveTo({
        tolerance: 0,
        duration: 800,
        easing: 'easeOutQuart',
        container: window
      })

    return(
        <div className="navDiv">
            <button className={ mode } onClick={() => moveTo.move(target)}>
                { name }
            </button>
        </div>
    )    
}

export default NavButton;