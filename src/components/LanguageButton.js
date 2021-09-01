import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import '../styles/Buttons.css';

const ContextButton = ({ name }) => {

    const { isPolish, toggleLanguage } = useContext(AppContext);

    const txt = isPolish ? "ENG" : "PL";
    
    return(
        <div className="basicButton" onClick={ toggleLanguage }>
            { txt }
        </div>
    )
}

export default ContextButton;