import React from 'react'
import { connect } from 'react-redux';
import Navbar from '../navigation/Navbar';


const GameContainer = (props) => {

    return (
        <div>
            <h2>This is a game container</h2>
            <ul>{ props.games.map( game => (
            <li>| {game.title} | {game.platform} | {game.kind} | {game.is_completed ? 'Completed' : 'Not Completed Yet' } |</li>
            ))}</ul>
            {/* <GamesFinished />
            <GamesNotFinished /> */}
            < Navbar />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    games: state.user.games
})

export default connect(mapStateToProps)(GameContainer);