import React, { useContext } from "react";

import { AppContext } from "../AppContext";

import github from '../img/icons/github.svg';
import upload from '../img/icons/upload.svg';

import '../styles/Slide.css';

const Slide = ({ projectInfo }) => {

    const { isPolish } = useContext( AppContext );

    const { titlePL, titleENG, ghPages, ghRepo, imgLink } = projectInfo;

    return(
        <div className="slide">
            <div className="slide__title"> { isPolish ? titlePL : titleENG } </div>
            <div className="slide__github"> 
                <div className="slide__github__tile">
                    <a href={ghPages}>
                        <img src={upload} alt='icon' /> 
                    </a>
                </div>

                <div className="slide__github__tile">
                    <a href={ghRepo}>
                        <img src={github} alt='icon' /> 
                    </a>
                </div>
            </div>
            <div className='slide__img'> <img src ={imgLink} alt='img' ></img></div>
        </div>
    )
}

export default Slide;