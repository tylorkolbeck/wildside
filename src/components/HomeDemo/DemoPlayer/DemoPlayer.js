import React from 'react'
import './DemoPlayer.css'

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

    }
]

const DemoPlayer = props => {
    return (
        <div className="DemoPlayer_player_container">
            <div>
                <div key={props.playerObj.title} className="DemoPlayer_player">
                        <div className="DemoPlayer_play_button"></div>
                    </div>
                    <div className="DemoPlayer_description">{`${props.playerObj.title.toUpperCase()} ${props.playerObj.playTime}`}</div>
                </div>
        </div>
    )
}

export default DemoPlayer