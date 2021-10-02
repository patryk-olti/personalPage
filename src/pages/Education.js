import React from "react";

import EducationContainer from '../containers/Education';

const Education = () => {

    return(
        <div className="container" id="education">
            <div>
                <span className="titleText">Edukacja</span>
                <EducationContainer />
                <div className="education__background"><span className="backgroundText">education</span></div>
            </div>
        </div>
    )
}

export default Education;