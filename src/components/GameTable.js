import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGame } from '../redux/actions/userActions';
// import { Link } from 'react-router-dom';
// import GamePage from './GamePage';
import GameRow from './GameRow';

class GameTable extends Component {


    render() {
        const heading = this.props.heading
        const gameEntries = Object.entries(this.props.games).map( game => Object.entries(game))
        
        const handleOnClick = (gameId) => {
            this.props.deleteGame(gameId)
            window.location.reload()
        }

        return (
            <div className='main-gametable-wrapper' >
                <table>
                    <thead>
                        <tr>
                            { heading.map( head => <th>{head}</th>) }
                        </tr>
                    </thead>
                   <tbody>
                        { gameEntries.map( g => <GameRow game={g[1][1]} handleOnClick={handleOnClick} /> ) }
                        {/* <button>
                            { <Link to='/games/:id' component={ GamePage }>Game Page</Link>}
                        </button> */}
                   </tbody>
                </table>
            </div>
        )
    }

}

export default connect(null, { deleteGame })(GameTable);