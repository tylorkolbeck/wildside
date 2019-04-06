import React from 'react'
import './DemoPlayer.css'



const DemoPlayer = props => {
    let playing = ''

    if (props.playing) {
        playing = 'DemoPlayer_notPlaying'
        // playing = <div style={{background: 'red', zIndex: '100'}}>PLAYING</div>
    }
    return (
        <div>
                <div key={props.playerObj.title} style={{backgroundImage: `url(${props.background})`}} className="DemoPlayer_player" data-title={props.dataTitle} id={props.id} onClick={props.playHandle}>
                        <div className={`DemoPlayer_play_button ${playing}`}></div>
                </div>
                
                    
                <div className="DemoPlayer_description">{`${props.playerObj.title.toUpperCase()}`}</div>
        </div>
    )
}

export default DemoPlayer