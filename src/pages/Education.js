import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import EducationContainer from '../containers/Education';

const Education = () => {

    const { isPolish } = useContext( AppContext );

    return(
        <div className="container" id="education">
            <div>
                <span className="titleText">{isPolish ? 'Edukacja' : 'Education' }</span>
                <EducationContainer />
                <div className="education__background"><span className="backgroundText">education</span></div>
            </div>
        </div>
    )
}

export default Education;