import React from "react";

import Slide from '../components/Slide';

import '../styles/Projects.css';

const Projects = () => {

    /*const listOfProjects = [
        {
            id: 1,
            titlePL: "strona firmy SysKon",
            titleENG: "SysKons website",
            ghPages: "link",
            ghRepo: "link",
            imgLink: "..."
        },
        {
            id: 2,
            titlePL: "strona do analizy biegu",
            titleENG: "runner analysis website",
            ghPages: "link",
            ghRepo: "link",
            imgLink: "..."
        },
    ]*/

    return(
        <div className="containerProjects" id="projects">
            <div className="slider">
                <Slide />
            </div>
        </div>
    )
}

export default Projects;