import React from "react";

import OneProject from "../components/OneProject";

import imgSyskon from '../img/projects/syskon.png';
import imgWgory from '../img/projects/wgory.png';
import imgAcademy from '../img/projects/akademia.png';
import imgWallet from '../img/projects/currency.png';

import index from '../styles/index.module.css';

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
            titlePL: "aplikacja górska",
            titleENG: "Moutains app",
            description: "React, Next.JS, GSAP, firebase",
            ghPages: "https://mountains-eight.vercel.app/",
            ghRepo: "",
            imgLink: imgWgory
        },
        {
            id: 3,
            titlePL: "centrum dziecka",
            titleENG: "children's academy",
            description: "HTML5, CSS3, JS, React, JSX",
            ghPages: "https://lukas960.github.io/CentrumDziecka/?fbclid=IwAR1Kee99ENBC-cr2j4AzKC36FvFckeOoF7eod5FmtoIEbb5jfUsdgeFCqSY",
            ghRepo: "https://github.com/patryk-olti/personalPage",
            imgLink: imgAcademy
        },
        {
            id: 4,
            titlePL: "portfel walut",
            titleENG: "currency wallet",
            description: "TypeScript, Redux, GSAP",
            ghPages: "https://patryk-olti.github.io/nask/",
            ghRepo: "https://github.com/patryk-olti/nask",
            imgLink: imgWallet
        },
    ]

    return(
        <div className={index.container} id="projects">
            <div className={index.content__flexRow}>
                <OneProject dbItem={listOfProjects[0]} />
                <OneProject dbItem={listOfProjects[1]} />
                <OneProject dbItem={listOfProjects[2]} />
                <OneProject dbItem={listOfProjects[3]} />
            </div>

            <div className={index.background__text} > <span className={index.right}>  projects </span></div>
        </div>
    )
}

export default Projects;