import React from 'react'
import './HomeDemoContainer.css'

import Player from '../DemoPlayer/DemoPlayer'
import Button from '../../Button/Button'
import DownArrow from '../../DownArrow/DownArrow'


let playerObjs = [
    {
        title: 'Aquarium Tour',
        playTime: '1m 42s',
        background: 'tiger_edited.jpg'
    },
    {
        title: 'Dive School',
        playTime: '42m',
        background: 'diver_blackwhite_edited.jpg'

    }
]

let players = playerObjs.map(player => {
    return (
        <Player playerObj={player} backgroundImg={player.background} key={player.title}/>
    )
})

const HomeDemoContainer = props => {
    return (
        <div className="HomeDemoContainer_container">

            <h1>DEMOS</h1>

            <div className="HomeDemoContainer_player_container">
                {players}
            </div>
            
            <Button location="/demos" text="VIEW ALL" style={{background: '#606C67', color: 'white'}}/>

            <DownArrow style={{borderTop: '15px solid white'}} />
        </div>
    )
}

export default HomeDemoContainer