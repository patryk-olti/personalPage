import React from "react";

import Slider from '../containers/Slider';

import '../styles/Projects.css';

import imgSyskon from '../img/projects/syskon.png';
import imgPizza from '../img/projects/pizza.png';

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

    const dots = listOfProjects.map(item => (
        <div 
            key={Math.floor(Math.random()*192929)}
        ></div>
    ))

    return(
        <div className="containerProjects" id="projects">
            <div className="slider">
                <Slider allProjects={listOfProjects} />
                <div className="slider__circles">
                    { dots }
                </div>
            </div>
        </div>
    )
}

export default Projects;