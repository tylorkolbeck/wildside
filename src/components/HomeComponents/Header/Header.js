import React from 'react'
import './Header.css'

import HeaderImage from '../../../assets/images/logo/wildsideLogo.png'
import DownArrow from '../../../components/DownArrow/DownArrow'

const Header = props => {
    return (
        <div className="Header_container">
            <img src={HeaderImage} alt="Logo" />
            <DownArrow style={{borderTop: '15px solid white', zIndex: '10'}}/>
        </div>
    )
}

export default Header