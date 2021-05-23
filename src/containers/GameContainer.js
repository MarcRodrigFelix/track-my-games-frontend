import React from 'react'
import { connect } from 'react-redux';
import Navbar from '../navigation/Navbar';
import GameTable from '../components/GameTable';


const GameContainer = (props) => {

    return (
        <div>
            <h2>These are all your tracked games so far</h2>
            {/* <ul>{ props.games.map( game => (
            <li>| {game.title} | {game.platform} | {game.kind} | {game.is_completed ? 'Completed' : 'Not Completed Yet' } |</li>
            ))}</ul> */}
            < GameTable games={props.games}/>
            < Navbar />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    games: state.user.games
})

export default connect(mapStateToProps)(GameContainer);