import React from 'react'
import './Header.css'

import HeaderImage from '../../../assets/images/logo/wildsideLogo.png'
import DownArrow from '../../../components/DownArrow/DownArrow'

const Header = props => {
    return (
        <div className="Header_container">
            <img src={HeaderImage} alt="Logo" />
            <p className="desktop Header_name">/ JOSH BAYLOCK</p>
            <h1 className="Header_title mobile">WILDESIDE VO<p>/ JOSH BAYLOCK </p></h1>
            <p className="Header_text mobile">
                An experienced storyteller who cares deeply about getting the message across in a fun and exciting way.
            </p>
            <DownArrow style={{borderTop: '15px solid white', zIndex: '10'}}/>
        </div>
    )
}

export default Header