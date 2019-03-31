import React from 'react'
import './Footer.css'

import { NavigationLinks } from '../../navigation_links'

const Footer = props => {
    return (
        <div className="Footer">
            {NavigationLinks.map(link => {
                    return (
                        <a href={`/${link.text}`} key={link.text}>{link.text.toUpperCase()}</a>
                    )
            })}

        </div>
    )
}

export default Footer