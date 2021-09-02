import React from 'react';

import ProgressBar from '../components/ProgressBar';

import html5 from '../img/icons/html5.svg';
import css3 from '../img/icons/css3.svg';
import js from '../img/icons/js.svg';
import react from '../img/icons/react.svg';
import node from '../img/icons/node.svg';
import github from '../img/icons/github.svg';

import '../styles/Skills.css';

const Skills = () => {

    return(
        <div className="skills">
            <ProgressBar progress="50" icon={html5} />
            <ProgressBar progress="80" icon={css3} />
            <ProgressBar progress="80" icon={js} />
            <ProgressBar progress="60" icon={react} />
            <ProgressBar progress="20" icon={node} />
            <ProgressBar progress="25" icon={github} />
        </div>
    )
}

export default Skills;