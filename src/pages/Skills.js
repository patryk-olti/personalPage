import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import ProgressBar from '../components/ProgressBar';
import patrykImg2 from '../img/patryk2.jpg';

import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

import '../styles/Skills.css';

const Skills = () => {

    const { isPolish } = useContext( AppContext );

    return(
        <div className="container" id="skills">
            <div className="skills__section"> 
                <div className="skills__image">
                <img src={ patrykImg2 } className="image" alt="img" /> 
                </div>
            </div>

            <div className="skills__section">  
                <div><span className="titleText">{isPolish ? 'Umiejętności' : 'Skills' }</span></div>
                    <div className="skills__skills">
                        <ProgressBar progress="90" icon={faHtml5} name='HTML5'/>
                        <ProgressBar progress="90" icon={faCss3} name='CSS3'/>
                        <ProgressBar progress="80" icon={faJs} name='JavaScript'/>
                        <ProgressBar progress="80" icon={faReact} name='React'/>
                        <ProgressBar progress="20" icon={faNodeJs} name='Node.JS'/>
                </div>
            </div>


            <div className="skills__background"><span className="backgroundText"> skills </span></div>
        </div>
        
    )
}

export default Skills;