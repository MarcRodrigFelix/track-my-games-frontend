import React from 'react'
import { connect } from 'react-redux';
import GameForm from '../components/GameForm'


const GameContainer = (props) => {

    return (
        <div>
            <h2>This is a game container</h2>
{console.log(props)}
            <ul>{ props.games.map( game => (
            <li>{game.title}</li>
            ))}</ul>
        < GameForm />
        </div>
    )
}

const mapStateToProps = (state) => ({
    games: state.user.games
})

export default connect(mapStateToProps)(GameContainer);