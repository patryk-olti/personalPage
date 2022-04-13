import React, { useEffect, useRef, useContext } from 'react';

import { AppContext } from '../AppContext';

import gsap from 'gsap';

import patrykImg from '../img/patryk.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

import index from '../styles/index.module.css';

const About = () => {

    const titleRef = useRef();
    const textRef = useRef();
    const imgRef = useRef();
    const instaRef = useRef();
    const ghRef = useRef();
    const linkedInRed = useRef();
    const fbRef = useRef();

    const tl = gsap.timeline();

    useEffect( () => {
        tl.fromTo( titleRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1, delay: 1 })
          .fromTo(  textRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1, delay: -0.5 })
          .fromTo(  imgRef.current, { y: '+=100', alpha: 0}, { y: 0, alpha: 1, duration: 1, delay: -0.5 })
          .fromTo(  instaRef.current, { alpha: 0}, { alpha: 1, duration: 0.5 })
          .fromTo(  ghRef.current, { alpha: 0}, { alpha: 1, duration: 0.5 })
          .fromTo(  linkedInRed.current, { alpha: 0}, { alpha: 1, duration: 0.5 })
          .fromTo(  fbRef.current, { alpha: 0}, { alpha: 1, duration: 0.5 })
    }, [])

    const { isPolish, isDark } = useContext( AppContext );

    const polishTitle = "Cześć";
    const polishAbout = "Nazywam się Patryk. Od 2012 roku zajmuje się programowaniem. W 2019 roku rozpocząłem przygodę z technologiami webowymi. Aktualnie wykorzystuję bibliotekę React wraz z innymi bibliotekami. Dążę do zdobycia większego doświadczenia zawodowego. Docelowo chciałbym zostać Full Stack Developerem. Interesuję się wędrówka górską oraz bieganiem. Zajmuję się także piwowarstwem domowym. Dotychczas uwarzyłem ponad 50 różnych warek."

    const englishTitle = "Hello";
    const englishAbout = "My name's Patryk. I started programmig at 2012. At 2019 I started adventure with web development. Actually I use React with others library for coding since 2020. In the future I will become Full Stack developer. My hobbies are: walking in the mountains, running. Additionally I'm home brewer and I brewed above 50 different beer's. "

    const iconClassName = isDark ? index.icon__darkMode :  index.icon__lightMode;

    return(
        <div className={index.container} id="about">
            <div className={index.content__flexRow}>

                <div className={index.content__section}>
                    <div className={index.content__textArea}>
                        <span className={index.titleText} ref={titleRef} > {isPolish ? polishTitle : englishTitle}</span>
                        <span className={index.largeText} ref={textRef} >{isPolish ? polishAbout : englishAbout} </span>
                    </div>
                </div>

                <div className={index.content__section} ref={imgRef} >
                     <img src={ patrykImg } className={index.content__image} alt="img" /> 
                </div>

                <div className={index.socials} > 
                    <a 
                        href="https://www.instagram.com/_oltix/"
                        className={index.about__singleIcon}
                        ref={instaRef}
                        > <FontAwesomeIcon icon={faInstagram} className={iconClassName} /> </a>
                    <a 
                        href="https://github.com/patryk-olti"
                        className={index.about__singleIcon}
                        ref={ghRef}
                    > <FontAwesomeIcon icon={faGithub} className={iconClassName} /> </a>
                    <a 
                        href="https://www.linkedin.com/in/patrykoltuch/"
                        className={index.about__singleIcon}
                        ref={linkedInRed}
                    > <FontAwesomeIcon icon={faLinkedinIn} className={iconClassName} /> </a>
                    <a 
                        href="https://www.facebook.com/patryk.oltuch/"
                        className={index.about__singleIcon}
                        ref={fbRef}
                    > <FontAwesomeIcon icon={faFacebook} className={iconClassName} /> </a>
                </div>
            </div>

            <div className={index.background__text} > <span className={index.left}>  about me </span></div>
        </div>
    )
}

export default About;