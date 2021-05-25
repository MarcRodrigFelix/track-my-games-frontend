import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteGame } from '../redux/actions/userActions';

class GameTable extends Component {

    render() {
        const gameEntries = Object.entries(this.props.games).map( game => Object.entries(game))

        const handleOnClick = (gameId) => {
            this.props.deleteGame(gameId)
            window.location.reload()
        }

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td><strong>Title</strong></td>
                            <td><strong>Platform</strong></td>
                            <td><strong>Genre</strong></td>
                            <td><strong>Completed</strong></td>
                        </tr>
                    </thead>
                   <tbody>
                            { gameEntries.map( (game) => 
                            <tr key={game[1][1].id}>
                                <td>{game[1][1].title}</td>
                                <td>{game[1][1].platform}</td>
                                <td>{game[1][1].kind}</td>
                                <td>{game[1][1].is_completed ? 
                                'Finished' : 'Not Finished'}</td>
                                <td><button onClick={() => (
                                   handleOnClick(game[1][1].id)
                                )}>Delete</button></td>
                            </tr>
                            )}
                   </tbody>
                </table>
            </div>
        )
    }

}

export default connect(null, { deleteGame })(GameTable);