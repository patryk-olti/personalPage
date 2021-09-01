import React from 'react';

import NavBar from './NavBar';

const DivNavBar = () => {

    const styles = {
        div: {
        display: 'flex',
        justifyContent: "space-between",
        width: "100%",
        borderBottom: "1px solid gray"
        },
        logo: {
            margin: "10px",
            paddingRight: "5px",
            fontSize: "20px",
            letterSpacing: "3px",
            borderRight: "7px solid gray"
        }
    }

    return(
        <div style={styles.div}>
            <div style={styles.logo}>Patryk</div>
            <NavBar />
        </div>
    )
}

export default DivNavBar;