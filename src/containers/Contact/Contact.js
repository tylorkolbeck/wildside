import React from 'react'
import './Contact.css'

import DownArrow from '../../components/DownArrow/DownArrow'
import ContactForm from '../../components/ContactForm/ContactForm'

import HeaderBox from '../../components/HeaderBox/HeaderBox'
import HeaderImage from './assets/shark1.jpg'
import HeaderImage2 from './assets/woods.jpg'


const Contact = props => {
    return (
        <div className="Contact_container">

            <HeaderBox 
                title="Let's Talk!" 
                text='“Josh is totally committed.  Hungry, dedicated and ready to deliver.  Directable and a likable guy.  Worth your time and consideration.” ' 
                span="- Steve Henderson"
                background={HeaderImage}>
                <DownArrow style={{borderTop: '15px solid #606C67'}}/>

            </HeaderBox>

            <div className="Contact_container-holder">
                <p>
                    When you hire Josh, not only are you getting a solid vocal sound but you’re also getting an experienced storyteller who cares deeply about getting the message across in a fun and exciting way. If this is what you are looking for complete the contact form below and we’ll be in touch!
                </p>
                <ContactForm />
            </div>
            


            <HeaderBox 
                text='“Josh is totally committed.  Hungry, dedicated and ready to deliver.  Directable and a likable guy.  Worth your time and consideration.” '
                span="- Steve Henderson" 
                background={HeaderImage2}
                style={{marginTop: '50px'}}/>
        
        </div>
    )
}

export default Contact