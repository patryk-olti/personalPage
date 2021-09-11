import React, { useState, useEffect } from 'react';

import Slide from '../components/Slide';

import '../styles/Slider.css';

const Slider = ({ allProjects }) => {

    const [ counter, setCounter ] = useState(0);
    const increaseCounter = () => setCounter( prev => prev === 2 ? prev = 0 : prev + 1)

    const allSlides = allProjects.map((slide,index) => (
        <Slide 
            key={allProjects[index].id}
            projectInfo={allProjects[index]}     
        />
    ))

    useEffect( () => {
        setInterval( () => {
            increaseCounter();
        }, 8000)
    }, [])

    return(
        <div className="sliders">
            {allSlides[counter]}
        </div>
    )
}

export default Slider;