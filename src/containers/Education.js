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
    },
    {
        name: 'React Developer',
        school: 'Szkoła Reacta',
        date: '01.10.2021 - 28.01.2022',
        link: 'https://szkolareacta.pl'
    },
]

const Education = () => {

    return(
        <div className="education__component">

            <div className="education__container">
                <div className="tile text">
                    <span className="largeText">{dbEducation[0].name} </span>
                    <span className="normalText">{dbEducation[0].school} </span>
                    <span className="smallText">{dbEducation[0].date} </span>
                </div>
                
                <div className="tile text"></div>
                <div className="tile text">
                <div> <span className="largeText">{dbEducation[2].name} </span></div>
                <div> <span className="normalText">{dbEducation[2].school} </span></div>
                <div> <span className="smallText">{dbEducation[2].date} </span></div>
                </div>
            </div>

            <div className="education__container centerBar">
                {dbEducation.map( item => <div className="tile circle" key={item.id}></div> )}
            </div>

            <div className="education__container">
                <div className="tile text"></div>
                <div className="tile text">
                <div> <span className="largeText">{dbEducation[1].name} </span></div>
                <div> <span className="normalText">{dbEducation[1].school} </span></div>
                <div> <span className="smallText">{dbEducation[1].date} </span></div>
                </div>

                <div className="tile text"></div>
                <div className="tile text">
                <div> <span className="largeText">{dbEducation[3].name} </span></div>
                <div> <span className="normalText">{dbEducation[3].school} </span></div>
                <div> <span className="smallText">{dbEducation[3].date} </span></div>
                <div> <span className="smallText"> <a href={dbEducation[3].link}>{dbEducation[3].link}</a> </span></div>
                
                </div>
                
            </div>

        </div>
    )
}

export default Education;