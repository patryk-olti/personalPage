import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import ProgressBar from '../components/ProgressBar';

import { faHtml5, faCss3, faJs, faReact, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons'

import '../styles/Skills.css';

const Skills = () => {

    const { isPolish } = useContext( AppContext );

    return(
        <div className="container" id="skills">
            <div className="skills__section"> 
                <div className="skills__image">
                    img
                </div>
            </div>

            <div className="skills__section">  
                <div><span className="titleText">{isPolish ? 'Umiejętności' : 'Skills' }</span></div>
                    <div className="skills__skills">
                        <ProgressBar progress="50" icon={faHtml5} />
                        <ProgressBar progress="80" icon={faCss3} />
                        <ProgressBar progress="80" icon={faJs} />
                        <ProgressBar progress="60" icon={faReact} />
                        <ProgressBar progress="20" icon={faNodeJs} />
                        <ProgressBar progress="25" icon={faGithub} />
                </div>
            </div>


            <div className="skills__background"><span className="backgroundText"> skills </span></div>
        </div>
        
    )
}

export default Skills;