import React from 'react'
import './HomeLinkBoxes.css'

const HomeLinkBoxes = props => {
    return (
        <div className="HomeLinkBoxes__container">
            <div className="HomeLinkBoxes__box">
                <div className="HomeLinkBoxes__box-img"></div>
                <div><a href="/demos"><h1>DEMOS</h1></a></div>
            </div>
            <div className="HomeLinkBoxes__box">
                <div className="HomeLinkBoxes__box-img"></div>
                <div><a href="/about"><h1>ABOUT</h1></a></div>
            </div>
            <div className="HomeLinkBoxes__box">
                <div className="HomeLinkBoxes__box-img"></div>
                <div><a href="/contact"><h1>HIRE</h1></a></div>
            </div>
        </div>
    )
}

export default HomeLinkBoxes