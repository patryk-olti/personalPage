import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContextButton = ({ name, icon1, icon2 }) => {

    const { isDark, toggleIsDark } = useContext(AppContext);

    const icon = isDark ? <FontAwesomeIcon icon={ icon2 } /> : <FontAwesomeIcon icon={ icon1 } />;
    
    const styles = {
        button: {
            padding: '5px 10px',
        }
    }

    function hoverButtonOn(e) {
        e.target.style.cursor = 'pointer';
    }
    
    return(
        <div 
            style={styles.button} 
            onClick={ toggleIsDark } 
            onMouseOver={ hoverButtonOn }
            >
            <span className="buttonText">{ icon }</span>
        </div>
    )
}

export default ContextButton;