import React, { useEffect, useRef, useContext } from 'react';

import { AppContext } from '../AppContext';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import EducationContainer from '../containers/Education';

import index from '../styles/index.module.css';

const Education = () => {

    const sectionRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        gsap.fromTo( sectionRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1.5, scrollTrigger: {
            trigger: '#education',
            start: 'top 40%',
            end: 'top top',
            scrub: 1
        }})
    }, [])

    const { isPolish } = useContext( AppContext );

    return(
        <div className={index.container} id="education">
            <div ref={sectionRef}>
                <span className={index.titleText}>{isPolish ? 'Edukacja' : 'Education' }</span>
                <EducationContainer />
            </div>
            <div className={index.background__text}> <span className={index.left}>  education </span> </div>
        </div>
    )
}

export default Education;