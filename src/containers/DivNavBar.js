import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import NavBar from './NavBar';

const DivNavBar = () => {

    const { isDark, toggleIsLogged } = useContext(AppContext);

    const styles = {
        lightMode: {
            display: 'flex',
            justifyContent: "space-between",
            width: "100%",
            position: "fixed",
            borderBottom: "1px solid gray",
            backgroundColor: "rgb(186, 204, 228)",
            color: "black",
            zIndex: 10
        },
        darkMode: {
            display: 'flex',
            justifyContent: "space-between",
            width: "100%",
            position: "fixed",
            borderBottom: "1px solid gray",
            backgroundColor: "rgb(1, 29, 65)",
            color: "white",
            zIndex: 10
        },
        divNavBar__logo: {
            margin: '10px',
            paddingRight: '5px',
            fontSize: '20px',
            letterSpacing: '3px',
            borderRight: '7px solid rgb(0, 108, 180)',
            transition: '0.5s',
        },
    }

    function hoverStyleOn(e) {
        e.target.style.cursor = 'pointer';
        e.target.style.color = 'rgb(190, 40, 40)';
    }

    function hoverStyleOff(e) {
        e.target.style.color = 'rgb(0,0,0)';
    }

    return(
        <div style={isDark ? styles.darkMode : styles.lightMode}>
            <div 
                style={styles.divNavBar__logo} 
                onClick={toggleIsLogged} 
                onMouseOver={hoverStyleOn} 
                onMouseLeave={hoverStyleOff}
            >
            <span className="buttonText"> Patryk </span>
            </div>
            <NavBar />
        </div>
    )
}

export default DivNavBar;