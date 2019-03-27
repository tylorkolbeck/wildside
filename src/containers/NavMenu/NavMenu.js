import React from 'react'
import { NavigationLinks } from './navigation_links.js'


const NavMenu = () => {

    return (
        <div>

            {NavigationLinks.map(link => {
                return (
                    <p>link</p>
                )
            })}

            <p>Navigation Links</p>
        </div>
    )
}

export default NavMenu