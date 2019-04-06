import React from 'react'
import './HomeLinkBoxes.css'
import { Redirect } from 'react-router-dom'

import boxImage2 from '../About/assets/bigfoot_edited.jpg'
import boxImage3 from '../Contact/assets/diver1.jpg'

class HomeLinkBoxes extends React.Component {

    state= {
        redirect: false,
        path: ''
    }

    setRedirect = (link) => {
        console.log(link)
        this.setState({
            redirect: true,
            path: link
        })
    }

    renderRedirect = () => {
        return this.state.redirect ? <Redirect to={this.state.path} /> : null
    }

    render() {
        return (
            <div className="HomeLinkBoxes__container">
                {this.renderRedirect()}

            <div className="HomeLinkBoxes__box">

                
                <div className="HomeLinkBoxes__box-img" onClick={() => this.setRedirect('/demos')}></div>
            
                <div><a href="/demos"><h1>DEMOS</h1></a></div>
            </div>

            <div className="HomeLinkBoxes__box">

                <div className="HomeLinkBoxes__box-img" onClick={() => this.setRedirect('/about')} style={{backgroundImage: `url(${boxImage2})`}}></div>
                <div><a href="/about"><h1>ABOUT</h1></a></div>

            </div>
            <div className="HomeLinkBoxes__box">
                <div className="HomeLinkBoxes__box-img" onClick={() => this.setRedirect('/contact')} style={{backgroundImage: `url(${boxImage3})`}}></div>
                <div><a href="/contact"><h1>HIRE</h1></a></div>
            </div>
        </div>
        )
    }
}

export default HomeLinkBoxes