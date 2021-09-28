import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from '../AppContext';

import '../styles/OneProject.css';

const OneProject = ({ dbItem }) => {

    const [ isActive, setIsActive ] = useState(false);

    const styles = {
        isActiveStyle: {
            display: 'block'
        },
        isDisactiveStyle: {
            display: 'none'
        }
    }

    const { isPolish } = useContext(AppContext);


    return(
            <div className='oneProject__container' 
                onMouseEnter={() => setIsActive(true)} 
                onMouseLeave={() => setIsActive(false)}
            >

                <div style={ isActive ? styles.isActiveStyle : styles.isDisactiveStyle }>
                    <div className="oneProject__content">
                        <div><span className="oneProject__title"> { isPolish ? dbItem.titlePL : dbItem.titleENG} </span></div>
                        <div><span className="oneProject__desc"> {dbItem.description} </span></div>
                        <div><a href={dbItem.ghPages} > <button><span><FontAwesomeIcon icon={faGlobe} /></span> live </button></a> </div>
                    </div>
                </div>


                <div className='oneProject__imgDiv'>
                    <img src={dbItem.imgLink} alt='img'></img>
                </div>

            </div>
    )
}

export default OneProject;