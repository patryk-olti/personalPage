import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../styles/Buttons.css';

const ContextButton = ({ name, icon1, icon2 }) => {

    const { isDark, toggleIsDark } = useContext(AppContext);

    const icon = isDark ? <FontAwesomeIcon icon={ icon2 } /> : <FontAwesomeIcon icon={ icon1 } />;
    
    return(
        <div className="basicButton" onClick={ toggleIsDark } >
            { icon }
        </div>
    )
}

export default ContextButton;