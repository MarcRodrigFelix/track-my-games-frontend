import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGame } from '../redux/actions/userActions';
import { Link } from 'react-router-dom';
import GamePage from './GamePage';

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
                            { gameEntries.map( (game) =>
                            <tr key={game[1][1].id}>
                                <td>{game[1][1].title}</td>
                                <td>{game[1][1].platform}</td>
                                <td>{game[1][1].kind}</td>
                                <td>{game[1][1].is_completed ? 'Finished' : 'Not Finished'}</td>
                                <td><button onClick={() => (
                                   handleOnClick(game[1][1].id)
                                )}>Delete</button></td>
                                <td>
                                    <button>
                                        { <Link to='/games/:id' component={ GamePage }>Game Page</Link>}
                                    </button>
                                </td>
                            </tr>
                            )}
                   </tbody>
                </table>
                <>
                {/* {gamePage} */}
                </>
            </div>
        )
    }

}

export default connect(null, { deleteGame })(GameTable);