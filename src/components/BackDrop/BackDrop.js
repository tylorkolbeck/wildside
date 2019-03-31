import React from 'react'
import './BackDrop.css'

import { NavigationLinks } from '../../navigation_links'

const BackDrop = props => {
    let backDropClass = props.backDropShown ? 'show' : 'hidden'

    return (
        <div className={`Backdrop_container BackDrop ${backDropClass}`} onClick={props.backdropToggleHandler}>
            <div className="Backdrop_linkContainer">
                <a href={`/`} >HOME</a>

                {NavigationLinks.map(link => {
                    return (
                        <a href={`/${link.text}`} key={link.text}>{link.text.toUpperCase()}</a>
                    )
                })}
            </div>
            

        </div>
    )
}

export default BackDrop