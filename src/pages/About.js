import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import patrykImg from '../img/patryk.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import index from '../styles/index.module.css';

const About = () => {

    const { isPolish, isDark } = useContext( AppContext );

    const polishTitle = "Cześć";
    const polishAbout = "Nazywam się Patryk. Od 2012 roku programuję. W 2019 roku rozpocząłem przygodę z technologiami webowymi. Do pisania stron wykorzystuję bibliotekę React wraz z innymi bibliotekami. W przyszłości chciałbym być full stack developerem. Moje zainteresowania to bieganie, chodzenie po górach i piwowarstwo domowe. Uwarzyłem już ponad 50 różnych warek."

    const englishTitle = "Hello";
    const englishAbout = "My name's Patryk. I started programmig at 2012. At 2019 I started adventure with web development. I use React with others library for coding since 2020. In the future I will become Full Stack developer. My hobbies are: running, walking in the mountains and home brewing. I brewed above 50 different beer's. "

    const iconClassName = isDark ? index.icon__darkMode :  index.icon__lightMode;

    return(
        <div className={index.container} id="about">
            <div className={index.content__flexRow}>

                <div className={index.content__section}>
                    <div className={index.content__textArea}>
                        <span className={index.titleText}> {isPolish ? polishTitle : englishTitle}</span>
                        <div><span className={index.largeText} >{isPolish ? polishAbout : englishAbout} </span></div>
                    </div>
                </div>

                <div className={index.content__section}>
                     <img src={ patrykImg } className={index.content__image} alt="img" /> 
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
     
            <div className={index.background__text} > <span className={index.left}>  about me </span></div>
        </div>
    )
}

export default About;