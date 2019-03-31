import React from 'react'
import './ContactForm.css'

import Button from '../Button/Button'

const ContactForm = props => {
    return (
        <div className="ContactForm_container">
            <form>
                <input type="text" placeholder="First"></input>
                <input type="text" placeholder="Last"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Subject"></input>
                <textarea placeholder="Message"></textarea>
                <Button text="Submit" style={{marginTop: '20px'}}/>
            </form>
        </div>
    )
}

export default ContactForm