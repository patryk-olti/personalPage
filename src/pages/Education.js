import React from "react";

import EducationContainer from '../containers/Education';

const Education = () => {

    const styles = {
        education__container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            height: '100vh',
            marginTop: '50px',
            userSelect: 'none'
        },
        education__title: {
            marginBottom: '50px',
            fontSize: '30px',
        }
    }

    return(
        <div style={styles.education__container} id="education">
            <span style={styles.education__title}>Edukacja</span>
            <EducationContainer />
            <div className="education__background">education</div>
        </div>
    )
}

export default Education;