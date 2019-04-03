import React from 'react'
import './Home.css'

import Header from '../../components/HomeComponents/Header/Header'
import HomeAbout from '../../components/HomeComponents/HomeAbout/HomeAbout'
import HomeDemoContainer from '../../components/HomeDemo/HomeDemoContainer/HomeDemoContainer'
import QuoteBox from '../../components/QuoteBox/QuoteBox'
import HeaderBox from '../../components/HeaderBox/HeaderBox'
import DownArrow from '../../components/DownArrow/DownArrow'


import BottomHeaderBoxBg from './assets/ocean1_edited.jpg'
import AboutHeaderBoxImg from './assets/woods_edited.jpg'

const Home = props => {
    return (
        <div style={{position: 'relative'}}>
            <Header>
                {/* <DownArrow style={{borderTop: '15px solid red', zIndex: '100'}}/> */}

            </Header>

            <HeaderBox 
                background={AboutHeaderBoxImg}
                text="
                Josh Blaylock is a strong voice over talent living in Atlanta, Georgia. He created Wildside VO as a way to continuously share his passion for animals, storytelling and the wild world.">
            </HeaderBox>
            
            <HomeDemoContainer />
            
            <HeaderBox 
                background={BottomHeaderBoxBg}
                text='“Josh is totally committed.  Hungry, dedicated and ready to deliver.  Directable and a likable guy.  Worth your time and consideration.” '
                span='-Steve Henderson'/>
        </div>
    )
}

export default Home