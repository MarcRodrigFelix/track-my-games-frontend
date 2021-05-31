import React from 'react'
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import GameTable from '../components/GameTable';


const GameContainer = (props) => {

    const headers = [ 
        'Title', 
       ' Platform',
        'Genre',
        'Completed',
        'Delete',
        'Visit'
    ]

    return (
        <div className="gamecontainer-wrapper">
            <h4>These are all your tracked games so far</h4>
            < GameTable headers={headers} games={props.games}/>
            < Navbar />
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
    games: state.user.games
})

export default connect(mapStateToProps)(GameContainer);