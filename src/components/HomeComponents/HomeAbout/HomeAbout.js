import React from 'react'
import './HomeAbout.css'

import DownArrow from '../../DownArrow/DownArrow'
import Zoom from 'react-reveal'

// import JoshLion1 from '../../../assets/images/clientPhotos/joshLion.jpg'

const HomeAbout = props => {
    return (
        <div className="HomeAbout_container">

            <div className="HomeAbout_inner_container">
                {/* <div className="HomeAbout_info_left desktop">
                </div> */}
                <div className="HomeAbout_info">
                        <p>
                            Josh Blaylock is a strong voice over talent living in Atlanta, Georgia.  
                            Wildside VO was created as a way to continue to share his passion. When you hire Josh, not only are you getting a solid vocal sound but you’re also getting an experienced storyteller who cares deeply about getting the message across in a fun and exciting way.
                        </p>
                </div>
            </div>

            <DownArrow style={{borderTop: '15px solid #606C67'}}/>

        </div>
    )
}

export default HomeAbout