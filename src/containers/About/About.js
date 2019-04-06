import React from 'react'
import './About.css'

import AboutMe from '../../components/AboutComponents/AboutMe/AboutMe'
import HeaderBox from '../../components/HeaderBox/HeaderBox'
import DownArrowSvg from '../../components/HomeComponents/assets/downArrow'

import HeaderImage from './assets/joshtwo.jpg'
const About = props => {
    return (
        <div className="About_container">
            <HeaderBox title="Josh Blaylock" background={HeaderImage} style={{fontSize: '.8em', backgroundPosition: 'top'}} > 
                {/* <DownArrow style={{borderTop: '15px solid #606C67'}}/> */}
            </HeaderBox>
            <DownArrowSvg styling={{fill: '#606C67', height: '30px', marginTop: '50px'}}/>

            <AboutMe />
        </div>
    )
}

export default About