import React, { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import OneProject from "../components/OneProject";

import imgSyskon from '../img/projects/syskon.png';
import imgWgory from '../img/projects/wgory.png';
import imgAcademy from '../img/projects/akademia.png';
import imgWallet from '../img/projects/currency.png';
import imgPhysio from '../img/projects/physio.png';

import index from '../styles/index.module.css';

const Projects = () => {

    const sectionRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        gsap.fromTo( sectionRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1.5, scrollTrigger: {
            trigger: '#projects',
            start: 'top 40%',
            end: 'top top',
            scrub: 1
        }})
    }, [])

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
        {
            id: 5,
            titlePL: "strona wizytówka",
            titleENG: "landing page",
            description: "React, GSAP",
            ghPages: "https://patryk-olti.github.io/physiotherapistPage/",
            ghRepo: "https://github.com/patryk-olti/physiotherapistPage",
            imgLink: imgPhysio
        },
    ]

    return(
        <div className={index.container} id="projects">
            <div className={index.content__flexRow} ref={sectionRef}>
                <OneProject dbItem={listOfProjects[0]} />
                <OneProject dbItem={listOfProjects[1]} />
                <OneProject dbItem={listOfProjects[2]} />
                <OneProject dbItem={listOfProjects[3]} />
                <OneProject dbItem={listOfProjects[4]} />
            </div>

            <div className={index.background__text} > <span className={index.right}>  projects </span></div>
        </div>
    )
}

export default Projects;