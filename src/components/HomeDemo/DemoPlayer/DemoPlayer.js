import React from 'react'
import './DemoPlayer.css'

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