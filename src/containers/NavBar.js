import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import NavButton from '../components/NavButton';
import LanguageButton from '../components/LanguageButton';
import DarkModeButton from '../components/DarkModeButton';

const NavBar = () => {

    const { isPolish } = useContext( AppContext );

    const styles = {
        display: "flex",
        justifyContent: 'flex-end'
    }

    return(
        <nav style={styles}>
            <NavButton name={ isPolish ? "o mnie" : "about me"} scrollTarget='about'/>
            <NavButton name={ isPolish ? "umiejętności" : "skills"} scrollTarget='skills'/>
            <NavButton name={ isPolish ? "edukacja" : "education"} scrollTarget='education'/>
            <NavButton name={ isPolish ? "projekty" : "projects"} scrollTarget='projects'/>
            <LanguageButton name="Language" />
            <DarkModeButton name="DARK" icon1={faMoon} icon2={faSun} />
        </nav>
    )
}

export default NavBar;