import React from 'react'
import './HomeAbout.css'

import DownArrow from '../../DownArrow/DownArrow'

// import JoshLion1 from '../../../assets/images/clientPhotos/joshLion.jpg'

const HomeAbout = props => {
    return (
        <div className="HomeAbout_container">

            <div className="HomeAbout_inner_container">
                <div className="HomeAbout_info_left desktop">
                    {/* <img src={JoshLion1} alt="Josh and Lion" /> */}
                </div>
                <div className="HomeAbout_info_right">
                    <p>
                        Josh Blaylock is a strong voice over talent living in Atlanta, Georgia. He has spent the past 14 years living out his dream career as a professional animal keeper working with a wide variety of different species from Sea Lions &amp; Walrus to Tigers, Lions and Birds of Prey.  
                    </p>

                    <p>
                        Josh created Wildside VO as a way to continue to share his passion. That means when you hire Josh, not only are you getting a solid vocal sound but you’re also getting an experienced storyteller who cares deeply about getting the message across in a fun and exciting way.
                    </p>
                </div>
            </div>

            <DownArrow style={{borderTop: '15px solid #606C67'}}/>

        </div>
    )
}

export default HomeAbout