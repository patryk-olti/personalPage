import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import patrykImg from '../img/patryk.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import index from '../styles/index.module.css';

const About = () => {

    const { isPolish, isDark } = useContext( AppContext );

    const polishTitle = "Cześć";
    const polishAbout = "Nazywam się Patryk. Jestem absolwentem Politechniki Wrocławskiej, a dokładniej kierunku elektronika na wydziale Elektroniki. Od gimnazjum mam do czynienia z programowaniem (C++), a od 2017 roku interesuję się tematyką web-dewelopmentu. Chciałbym w przyszłości pracować jako full stack, dlatego też dużo czasu poświęcam na edukację."

    const englishTitle = "Hello";
    const englishAbout = "My name's Patryk. I'm graduate University Science and Technologi in Wroclaw, exactly field of study Electronic on Electronic faculty. My programming story started on junior high school with C++, from 2017 I interested with web development. In the future I will be Full Stack developer and that's why I sacrifice a lot of time for education."

    const iconClassName = isDark ? index.icon__darkMode :  index.icon__lightMode;

    return(
        <div className={index.container} id="about">
            <div className={index.content__flexRow}>

                <div className={index.content__section}>
                    <div className={index.content__textArea}>
                        <div><span className="titleText"> {isPolish ? polishTitle : englishTitle}</span> </div>
                        <div><span className="largeText" >{isPolish ? polishAbout : englishAbout} </span></div>
                    </div>
                </div>

                <div className={index.content__section}>
                     <img src={ patrykImg } className={index.about__image} alt="img" /> 
                </div>

                <div className={index.socials} > 
                    <a 
                        href="https://www.instagram.com/_oltix/"
                        className={index.about__singleIcon}
                        > <FontAwesomeIcon icon={faInstagram} className={iconClassName} /> </a>
                    <a 
                        href="https://github.com/patryk-olti"
                        className={index.about__singleIcon}
                    > <FontAwesomeIcon icon={faGithub} className={iconClassName} /> </a>
                    <a 
                        href="https://www.linkedin.com/in/patrykoltuch/"
                        className={index.about__singleIcon}
                    > <FontAwesomeIcon icon={faLinkedinIn} className={iconClassName} /> </a>
                    <a 
                        href="https://www.facebook.com/patryk.oltuch/"
                        className={index.about__singleIcon}
                    > <FontAwesomeIcon icon={faFacebook} className={iconClassName} /> </a>
                </div>

            </div>

            
            <div className={index.background__text} > about me </div>
        </div>
    )
}

export default About;