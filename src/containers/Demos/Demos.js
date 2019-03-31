import React from 'react'
import './Demos.css'

import HeaderBox from '../../components/HeaderBox/HeaderBox'
import DownArrow from '../../components/DownArrow/DownArrow'
import Shark1 from './assets/shark1.jpg'
import Player from '../../components/HomeDemo/DemoPlayer/DemoPlayer'


let playerObjs = [
    {
        title: 'Aquarium Tour',
        playTime: '1m 42s'
    },
    {
        title: 'Dive School',
        playTime: '42m'

    },
    {
        title: 'Big Cats',
        playTime: '5m 34s'

    },
    {
        title: 'Aquarium Tour',
        playTime: '1m 42s'
    },
    {
        title: 'Dive School',
        playTime: '42m'

    },
    {
        title: 'Big Cats',
        playTime: '5m 34s'

    },
]

let players = playerObjs.map(player => {
    return (
        <Player playerObj={player} />
    )
})


const Demos = props => {
    return (
        <div>
            <HeaderBox title="Demos" background={Shark1}>
                <DownArrow style={{borderTop: '15px solid #606C67'}}/>
            </HeaderBox>

            <div className="Demo_playerContainer">
                {players}
            </div>
        </div>
    )
}

export default Demos