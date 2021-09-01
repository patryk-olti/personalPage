import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import NavButton from '../components/NavButton';
import LanguageButton from '../components/LanguageButton';
import DarkModeButton from '../components/DarkModeButton';

const NavBar = () => {

    const { isPolish } = useContext( AppContext );

    const styles = {
        display: "flex",
        padding: "10px",
    }

    return(
        <nav style={styles}>
            <NavButton name={ isPolish ? "o mnie" : "about"}/>
            <NavButton name={ isPolish ? "umiejętności" : "skills"}/>
            <NavButton name={ isPolish ? "edukacja" : "education"}/>
            <NavButton name={ isPolish ? "projekty" : "projects"}/>
            <LanguageButton name="Language" />
            <DarkModeButton name="DARK" icon1={faMoon} icon2={faSun} />

            
        </nav>
    )
}

export default NavBar;