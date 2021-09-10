import React from "react";

import EducationContainer from '../containers/Education';

const Education = () => {

    const styles = {
        containerEducation: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            marginTop: '50px'
        },
        spanTitle: {
            marginBottom: '50px',
            fontSize: '30px',
        }
    }

    return(
        <div style={styles.containerEducation} id="education">
            <span style={styles.spanTitle}>Edukacja</span>
            <EducationContainer />
        </div>
    )
}

export default Education;