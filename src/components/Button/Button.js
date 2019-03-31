import React from 'react'
import './Button.css'

const Button = props => {
    return ( 
        <a href={props.location} className="Button" style={{...props.style}}>
            {props.text}
        </a>
    )
}

export default Button