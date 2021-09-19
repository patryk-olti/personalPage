import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import patrykImg from '../img/patryk.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import '../styles/About.css';

const About = () => {

    const { isPolish, isDark } = useContext( AppContext );

    const polishTitle = "Cześć";
    const polishAbout = "Nazywam się Patryk. Jestem absolwentem Politechniki Wrocławskiej, a dokładniej kierunku elektronika na wydziale Elektroniki. Od gimnazjum mam do czynienia z programowaniem (C++), a od 2017 roku interesuję się tematyką web-dewelopmentu. Chciałbym w przyszłości pracować jako full stack, dlatego też dużo czasu poświęcam na edukację."

    const englishTitle = "Hello";
    const englishAbout = "My name's Patryk. I'm graduate University Science and Technologi in Wroclaw, exactly field of study Electronic on Electronic faculty. My programming story started on junior high school with C++, from 2017 I interested with web development. In the future I will be Full Stack developer and that's why I sacrifice a lot of time for education."

    const iconClassName = isDark ? "socials__icon icon--darkMode" : "socials__icon icon--lightMode";

    return(
        <div className="about__container" id="about">
            <div className="container__content">
                <div className="content__article">
                    <div className="article__title"> {isPolish ? polishTitle : englishTitle} </div>
                    <div className="article__about"> {isPolish ? polishAbout : englishAbout}</div>
                </div>
                <div className="content__image">
                     <img src={ patrykImg } className="image" alt="img" /> 
                </div>
            </div>
            <div className="content__socials"> 
                <a href="instagram"> <FontAwesomeIcon icon={faInstagram} className={iconClassName} /> </a>
                <a href="github"> <FontAwesomeIcon icon={faGithub} className={iconClassName} /> </a>
                <a href="linkedIn"> <FontAwesomeIcon icon={faLinkedinIn} className={iconClassName} /> </a>
                <a href="facebook"> <FontAwesomeIcon icon={faFacebook} className={iconClassName} /> </a>
            </div>
            <div className="container__background" > about me </div>
        </div>
    )
}

export default About;