import React from 'react'
import './Home.css'

import Header from '../../components/HomeComponents/Header/Header'
import HomeAbout from '../../components/HomeComponents/HomeAbout/HomeAbout'
import HomeDemoContainer from '../../components/HomeDemo/HomeDemoContainer/HomeDemoContainer'
import QuoteBox from '../../components/QuoteBox/QuoteBox'
import HeaderBox from '../../components/HeaderBox/HeaderBox'

import BottomHeaderBoxBg from './assets/ocean1.jpg'

const Home = props => {
    return (
        <div style={{position: 'relative'}}>
            <Header />
            <HomeAbout />
            <HomeDemoContainer />
            {/* <QuoteBox /> */}
            <HeaderBox 
                background={BottomHeaderBoxBg}
                text='“Josh is totally committed.  Hungry, dedicated and ready to deliver.  Directable and a likable guy.  Worth your time and consideration.” '
                span='-Steve Henderson'/>
        </div>
    )
}

export default Home