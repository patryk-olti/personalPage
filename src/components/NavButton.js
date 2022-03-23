import React, { useContext } from 'react';

import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';

import { AppContext } from '../AppContext';

import '../styles/NavButton.css';

const NavButton = ({ name, scrollTarget }) => {

    gsap.registerPlugin(ScrollToPlugin);

    const { isDark } = useContext(AppContext);
    const mode = isDark ? "navButton darkMode" : "navButton lightMode";

    const moveTop = () => gsap.to(window, {duration: 1, ease: 'power2', scrollTo: `#${scrollTarget}`});

    return(
        <div className="buttonNav">
            <button className={ mode } onClick={() => moveTop(scrollTarget)} >
                <span className="buttonText">{ name }</span>
            </button>
        </div>
    )    
}

export default NavButton;