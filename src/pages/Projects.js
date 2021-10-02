import React from "react";

import OneProject from "../components/OneProject";

import imgSyskon from '../img/projects/syskon.png';
import imgPizza from '../img/projects/pizza.png';
import imgAcademy from '../img/projects/akademia.png';

import '../styles/Projects.css';

const Projects = () => {

    const listOfProjects = [
        {
            id: 1,
            titlePL: "strona firmy SysKon",
            titleENG: "SysKon's website",
            description: "HTML5, CSS3, JS",
            ghPages: "https://patryk-olti.github.io/syskon/#",
            ghRepo: "https://github.com/patryk-olti/personalPage",
            imgLink: imgSyskon
        },
        {
            id: 2,
            titlePL: "strona pizzerii",
            titleENG: "pizza place website",
            description: "HTML5, CSS3, JS",
            ghPages: "https://patryk-olti.github.io/syskon/#",
            ghRepo: "https://github.com/patryk-olti/PizzaPlace",
            imgLink: imgPizza
        }
        ,
        {
            id: 3,
            titlePL: "centrum dziecka",
            titleENG: "children's academy",
            description: "HTML5, CSS3, JS, React, JSX",
            ghPages: "https://lukas960.github.io/CentrumDziecka/?fbclid=IwAR1Kee99ENBC-cr2j4AzKC36FvFckeOoF7eod5FmtoIEbb5jfUsdgeFCqSY",
            ghRepo: "https://github.com/patryk-olti/personalPage",
            imgLink: imgAcademy
        },
    ]

    return(
        <div className="container" id="projects">
            <div className="projects__content">
                <OneProject dbItem={listOfProjects[0]} />
                <OneProject dbItem={listOfProjects[1]} />
                <OneProject dbItem={listOfProjects[2]} />
            </div>

            <div className="projects__background">projects</div>
        </div>
    )
}

export default Projects;