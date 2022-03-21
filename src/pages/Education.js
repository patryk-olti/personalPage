import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import EducationContainer from '../containers/Education';

import index from '../styles/index.module.css';

const Education = () => {

    const { isPolish } = useContext( AppContext );

    return(
        <div className={index.container} id="education">
            <div>
                <span className={index.titleText}>{isPolish ? 'Edukacja' : 'Education' }</span>
                <EducationContainer />
                <div className={index.background__text}> <span className={index.left}>  education </span> </div>
            </div>
        </div>
    )
}

export default Education;