import React from 'react'
import './About.css'

import AboutMe from '../../components/AboutComponents/AboutMe/AboutMe'
import HeaderBox from '../../components/HeaderBox/HeaderBox'
import DownArrow from '../../components/DownArrow/DownArrow'

import HeaderImage from './assets/bigfoot.jpg'

const About = props => {
    return (
        <div className="About_container">
            <HeaderBox title="Josh Blaylock" background={HeaderImage} style={{fontSize: '.8em'}} > 
                <DownArrow style={{borderTop: '15px solid #606C67'}}/>
            </HeaderBox>
            <AboutMe />
        </div>
    )
}

export default About