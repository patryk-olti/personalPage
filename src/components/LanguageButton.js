import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

const ContextButton = ({ name }) => {

    const { isPolish, toggleLanguage } = useContext(AppContext);

    const txt = isPolish ? "ENG" : "PL";

    const styles = {
        button: {
            padding: '0 0.6rem'
        }
    }

    function hoverButtonOn(e) {
        e.target.style.cursor = 'pointer';
    }
    
    return(
        <div 
            style={styles.button} 
            onClick={ toggleLanguage }
            onMouseOver={hoverButtonOn}
        >
            <span className="buttonText"> { txt } </span>
        </div>
    )
}

export default ContextButton;