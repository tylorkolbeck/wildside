import React, { Component } from 'react'
import './Demos.css'

import HeaderBox from '../../components/HeaderBox/HeaderBox'
// import DownArrow from '../../components/DownArrow/DownArrow'
import Shark1 from './assets/shark1_edited.jpg'
import Player from '../../components/HomeDemo/DemoPlayer/DemoPlayer'

import audio1 from './assets/audio/audio1.mp3'
import audio2 from './assets/audio/audio2.mp3'

import Sound from 'react-sound'


// let playerObjs = [
//     {
//         title: 'Aquarium Tour',
//         playTime: '1m 42s',
//         src: audio1,
//         name: 'audio1',
//     },
//     {
//         title: 'Dive School',
//         playTime: '42m',
//         src: audio2,
//         name: 'audio2'
//     },
// ]




class Demos extends Component {

    componentWillMount() {

    }



    state={

        playerObjs: [
            {
                title: 'Aquarium Tour',
                playTime: '1m 42s',
                src: audio1,
                name: 'audio1',
                playing: false
            },
            {
                title: 'Dive School',
                playTime: '42m',
                src: audio2,
                name: 'audio2',
                playing: false
            },
        ],

        playing: false,

        audio1 : {
            src: audio1,
        },

        audio2 : {
            src: audio2,
        }
    }

    playAudioHandler(name, src) {
        let playerObjsCopy = this.state.playerObjs

        let playingDemo = playerObjsCopy.find(demo => demo.src === src)

        if (playingDemo.playing === true) {
            playingDemo.playing = false
        } else {
            playingDemo.playing = true
        }

        let notPlayingDemo = playerObjsCopy.find(demo => demo.src !== src)
        notPlayingDemo.playing = false

        if (this.state.playing === src) {
            this.setState({playing: false}, () => {
            })
        } else {
            this.setState({playing: this.state[name].src})
        }
    }

    render() {
        let players = this.state.playerObjs.map(player => {
            return (
                <Player 
                    playerObj={player} 
                    key={player.title} 
                    id={player.src} 
                    dataTitle={player.name} 
                    playHandle={() => this.playAudioHandler(player.name, player.src)}
                    playing={player.playing}/>
            )
        })

        return (
            <div className="Demo__container">
                <Sound 
                    url={this.state.playing ? this.state.playing : ''}
                    playStatus={Sound.status.PLAYING}
                    // onLoading={this.handleSongLoading}
                    // onPlaying={this.handleSongPlaying}
                    onFinishedPlaying={this.handleSongFinishedPlaying} />

                <HeaderBox title="Demos" background={Shark1} className="testtest">
                    {/* <DownArrow style={{borderTop: '15px solid #606C67'}}/> */}
                </HeaderBox>
    
                <div className="Demo_playerContainer">
                    {players}
                </div>
            </div>
        )
    }
    
}


export default Demos