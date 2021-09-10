import React from "react";

import Slide from '../components/Slide';

import '../styles/Projects.css';

import imgSyskon from '../img/projects/syskon.png';

const Projects = () => {

    const listOfProjects = [
        {
            id: 1,
            titlePL: "strona firmy SysKon",
            titleENG: "SysKon's website",
            ghPages: "https://patryk-olti.github.io/syskon/#",
            ghRepo: "https://github.com/patryk-olti/personalPage",
            imgLink: imgSyskon
        },
        {
            id: 2,
            titlePL: "strona do analizy biegu",
            titleENG: "runner analysis website",
            ghPages: "link",
            ghRepo: "link",
            imgLink: "..."
        },
    ]

    const dots = listOfProjects.map(item => (
        <div></div>
    ))

    return(
        <div className="containerProjects" id="projects">
            <div className="slider">
                <Slide projectInfo={listOfProjects[0]} />
                <div className="slider__circles">
                    { dots }
                </div>
            </div>
        </div>
    )
}

export default Projects;