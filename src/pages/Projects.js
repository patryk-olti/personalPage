import React from "react";

import OneProject from "../components/OneProject";
import imgSyskon from '../img/projects/syskon.png';
import imgPizza from '../img/projects/pizza.png';

import '../styles/Projects.css';

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
            titlePL: "strona pizzerii",
            titleENG: "pizza place website",
            ghPages: "https://patryk-olti.github.io/syskon/#",
            ghRepo: "https://github.com/patryk-olti/PizzaPlace",
            imgLink: imgPizza
        }
        ,
        {
            id: 3,
            titlePL: "empty",
            titleENG: "SysKon's website",
            ghPages: "https://patryk-olti.github.io/syskon/#",
            ghRepo: "https://github.com/patryk-olti/personalPage",
            imgLink: imgSyskon
        },
    ]

    return(
        <div className="projects__container" id="projects">
            <div className="projects__content">
                <OneProject img={listOfProjects[0].imgLink} />
            </div>
        </div>
    )
}

export default Projects;