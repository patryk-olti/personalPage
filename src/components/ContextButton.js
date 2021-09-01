import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContextButton = ({ name, icon1, txt }) => {

    const icon = icon1 ? <FontAwesomeIcon icon={ icon1 } /> : null;
    const text = txt ? txt : null;

    const styles = {
        padding: "0px 10px",
        fontSize: "20px"
    }

    return(
        <div style={ styles}>
            { icon }
            { text }
        </div>
    )
}

export default ContextButton;