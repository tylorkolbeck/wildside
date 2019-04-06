import React from 'react'
import './Header.css'

import HeaderImage from '../../../assets/images/logo/wildsideLogo.png'
import DownArrowSvg from '../assets/downArrow'

const Header = props => {

    let scrollPosition = 0 

    let scrollFunction = (pos) => {
        scrollPosition = pos
        // console.log(scrollPosition)
    }
 
    // let hideClass = scrollPosition > 100 ? 'hide' : ''
 
    window.addEventListener('scroll', () =>  {
         scrollFunction(window.pageYOffset)
     })


    return (
        <div className="Header_container">
            <div>
                <img src={HeaderImage} alt="Logo" />
                <p className="desktop Header_name">/ JOSH BLAYLOCK</p>
            </div>
            
            <h1 className="Header_title mobile">WILDSIDE VO<p>/ JOSH BLAYLOCK </p></h1>

            <div className="Header-downArrow desktop">
                <DownArrowSvg styling={{fill: '#606C67', height: '30px'}}/>
            </div>

            {/* <p className="Header_text mobile">
                An experienced storyteller who cares deeply about getting the message across in a fun and exciting way.
            </p> */}
            {/* <DownArrow style={{borderTop: '15px solid red', zIndex: '100'}} className="desktop"/> */}
        </div>
    )
}

export default Header