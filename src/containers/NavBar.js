import React from 'react';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

import NavButton from '../components/NavButton';
import ContextButton from '../components/ContextButton';

const NavBar = () => {

    const styles = {
        display: "flex",
        padding: "10px",
    }

    return(
        <nav style={styles}>
            <NavButton name="o mnie"/>
            <NavButton name="umiejętności"/>
            <NavButton name="edukacja"/>
            <NavButton name="portfolio"/>
            <ContextButton name="ENG" txt="ENG" />
            <ContextButton name="DARK" icon1={faMoon} />

            
        </nav>
    )
}

export default NavBar;