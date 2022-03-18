import React, { useContext } from 'react';

import { AppContext } from '../AppContext';

import ProgressBar from '../components/ProgressBar';
import patrykImg2 from '../img/patryk2.jpg';

import { faHtml5, faCss3, faJs, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons'

import index from '../styles/index.module.css';

const Skills = () => {

    const { isPolish } = useContext( AppContext );

    return(
        <div className={index.container} id="skills">
            <div className={index.content__flexRow}>
                <div className={index.content__section}> 
                    <img src={ patrykImg2 } className={index.content__image} alt="img" /> 
                </div>

                <div className={index.content__section}>  
                    <div><span className="titleText">{isPolish ? 'Umiejętności' : 'Skills' }</span></div>
                        <div className={index.content__flexColumn}>
                            <ProgressBar progress="90" icon={faHtml5} name='HTML5'/>
                            <ProgressBar progress="90" icon={faCss3} name='CSS3'/>
                            <ProgressBar progress="80" icon={faJs} name='JavaScript'/>
                            <ProgressBar progress="80" icon={faReact} name='React'/>
                            <ProgressBar progress="20" icon={faNodeJs} name='Node.JS'/>
                    </div>
                </div>
            </div>

            <div className={index.background__text}> <span className={index.right}>  skills </span> </div>
        </div>
        
    )
}

export default Skills;