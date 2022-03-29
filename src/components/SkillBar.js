import React, { useEffect, useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import '../styles/ProgressBar.css';

const BarAnim = ({ icon, name, progress=50 }) => {

    const animRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useEffect( () => {
        gsap.fromTo( animRef.current, { x: '0' }, { x: `+=${progress}%` , duration: 5, delay: 2,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 40%',
            end: 'top top'
        }})
    }, [])

    const innerStyles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
            width: '33rem',
            height: '50px',
            boxSizing: 'border-box',
        },
        backgroundBar: {
            position: 'relative',
            width: '100%',
            height: '30px',
            overflow: 'hidden',
        },
        backgroundBar__inner: {
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(90deg, rgb(253, 234, 59) 25%, rgb(58, 255, 78) 85%)',
        },
        backgroundBar__diff: {
            position: 'absolute',
            top: 0,
            left: 0,
            transform: 'translateX(100%)',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(194, 176, 176)',
        },
        backgroundBar__border: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            border: '2px solid black',
            boxSizing: 'border-box',
        },
        backgroundBar__text: {
            position: 'absolute',
            width: '100%',
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            textShadow: '2px 2px #000, -2px -2px #000',
            color: 'white'
        },
        icon: {
            fontSize: '2rem',
            marginRight: '20px',
            fontWeight: 'bold',
        }
    }

    return(
        <div style={innerStyles.container}>
            <FontAwesomeIcon icon={icon} style={innerStyles.icon} />
            <div style={innerStyles.backgroundBar}> 
                <div style={innerStyles.backgroundBar__inner}> </div>
                <div style={innerStyles.backgroundBar__diff} ref={animRef} > </div>
                <div style={innerStyles.backgroundBar__border} > </div>
            </div>
            <div style={innerStyles.backgroundBar__text}> {progress}% </div>
        </div>
    )
}

export default BarAnim;