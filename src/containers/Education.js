import React from 'react';

import '../styles/Education.css';

const dbEducation = [
    {
        name: 'Technik Informatyk',
        school: 'ZSTiE Wrocław, Technikum Informatyczne',
        date: '01.09.2011 - 30.06.2012'
    },
    {
        name: 'Technik Informatyk',
        school: 'Żmigród, Technikum Informatyczne',
        date: '01.09.2012 - 30.06.2015'
    },
    {
        name: 'Elektronik',
        school: 'Politechnika Wrocławska',
        date: '01.10.2016 - 28.01.2020'
    }
]

const Education = () => {

    return(
        <div className="education__component">

            <div className="education__container">
                <div className="tile text">
                    <div className="fieldOfStudy">{dbEducation[0].name}</div>
                    <div className="schoolName">{dbEducation[0].school}</div>
                    <div className="date">{dbEducation[0].date}</div>
                </div>
                <div className="tile text"></div>
                <div className="tile text">
                    <div className="fieldOfStudy">{dbEducation[2].name}</div>
                    <div className="schoolName">{dbEducation[2].school}</div>
                    <div className="date">{dbEducation[2].date}</div>
                </div>
            </div>

            <div className="education__container centerBar">
                <div className="tile circle"></div>
                <div className="tile circle"></div>
                <div className="tile circle"></div>
            </div>

            <div className="education__container">
                <div className="tile text"></div>
                <div className="tile text">
                    <div className="fieldOfStudy">{dbEducation[1].name}</div>
                    <div className="schoolName">{dbEducation[1].school}</div>
                    <div className="date">{dbEducation[1].date}</div>
                </div>
                <div className="tile text"></div>
            </div>

        </div>
    )
}

export default Education;