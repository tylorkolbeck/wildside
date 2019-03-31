import React from 'react'
import './NavMenu.css'
import { NavigationLinks } from '../../navigation_links'

import Logo from '../../components/Logo/Logo'
import BackDrop from '../../components/BackDrop/BackDrop'


const NavMenu = (props) => {

    return (
        <div>
            <div className="NavMenu_desktopContainer">
                <div className="NavMenu">
                    <Logo />

                    <div className="NavMenu_links">
                        {NavigationLinks.map(link => {
                            return (
                                <a href={`/${link.text}`} key={link.text}>{link.text.toUpperCase()}</a>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="NavMenu_mobileBurger" >
                <BackDrop backDropShown={props.backDropShown} backdropToggleHandler={props.backdropToggleHandler}/>
                {/* <div>X</div> */}
                <div className="NavMenu_burger" onClick={() => props.backdropToggleHandler()}> 
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

            </div>



        </div>

    )
}

export default NavMenu