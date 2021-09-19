import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/ProgressBar.css';

const ProgressBar = ({ progress, icon }) => {

    return(
        <div className="ProgressBar__container">
            
            <div className="ProgressBar__icon"> <FontAwesomeIcon icon={icon} className="icon" /> </div>
            <div className="ProgressBar__emptyBar">
                <div className="ProgressBar__done"
                    style={{
                        width: `${progress}%`
                    }}  
                >  
                    {progress}%
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;