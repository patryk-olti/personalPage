import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import '../styles/ProgressBar.css';

const ProgressBar = ({ progress, icon }) => {

    return(
        <div className="ProgressBar__container">
            <img src={icon} alt="icon" className="ProgressBar__icon"></img>
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