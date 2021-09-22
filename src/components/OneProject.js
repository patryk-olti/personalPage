import React from "react";

import '../styles/OneProject.css';

const OneProject = ({ img }) => {

    return(
            <div className='oneProject__container'>
                <div className='oneProject__hoverDiv'>
                    <span> Tekst </span>
                </div>

                <div className='oneProject__imgDiv'>
                    <img src={img} alt='img'></img>
                </div>
            </div>
    )
}

export default OneProject;