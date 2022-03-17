import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/ProgressBar.css';

const ProgressBar = ({ progress, icon, name }) => {

    return(
        <div className="ProgressBar__box">
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
            <span className='ProgressBar__span'> {name} </span>
        </div>
    )
}

export default ProgressBar;