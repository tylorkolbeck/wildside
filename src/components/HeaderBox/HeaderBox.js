import React from 'react'
import './HeaderBox.css'

const HeaderBox = props => {
    let styling = {
        backgroundImage: `url(${props.background})`
    }

    return (
        <div className="HeaderBox_container" style={{...styling, ...props.style}}>
            {props.children}
            <h1>{props.title}</h1>
            {props.text ? <p>{props.text}</p> : null}
        </div>
    )
}

export default HeaderBox