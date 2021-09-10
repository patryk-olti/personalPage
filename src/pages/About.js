import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import patrykImg from '../img/patryk.jpg'

import '../styles/About.css';

const About = () => {

    const { isPolish } = useContext( AppContext );

    const polishAbout = "Cześć. Nazywam się Patryk. Jestem absolwentem Politechniki Wrocławskiej, a dokładniej kierunku elektronika na wydziale Elektroniki. Od gimnazjum mam do czynienia z programowaniem (C++), a od 2017 roku interesuję się tematyką web-dewelopmentu. Chciałbym w przyszłości pracować jako full stack, dlatego też dużo czasu poświęcam na edukację."

    const englishAbout = "Hello. My name's Patrym. I'm graduate University Science and Technologi in Wroclaw, exactly field of study Electronic on Electronic faculty. My programming story started on junior high school with C++, from 2017 I interested with web development. In the future I will be Full Stack developer and that's why I sacrifice a lot of time for education."

    return(
        <div className="container" id="about">
            <div className="container__content">
                <div className="article"><span> {isPolish ? polishAbout : englishAbout} </span></div>
                <div className="divImage">
                     <img src={ patrykImg } className="image" alt="img" /> 
                    
                </div>
            </div>
        </div>
    )
}

export default About;