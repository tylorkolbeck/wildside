import React from 'react'
import './Home.css'

import Header from '../../components/HomeComponents/Header/Header'
import HomeAbout from '../../components/HomeComponents/HomeAbout/HomeAbout'
import HomeDemoContainer from '../../components/HomeDemo/HomeDemoContainer/HomeDemoContainer'
import QuoteBox from '../../components/QuoteBox/QuoteBox'

const Home = props => {
    return (
        <div style={{position: 'relative'}}>
            <Header />
            <HomeAbout />
            <HomeDemoContainer />
            <QuoteBox />
        </div>
    )
}

export default Home