import React, { Component } from 'react'

class GameRow extends Component {
    render() {
        const game = this.props.game
        return (
            <tr>
{console.log(game)}
                <td>{game.title}</td>
                <td>{game.platform}</td>
                <td>{game.kind}</td>
                <td>{game.is_completed ? 'Finished' : 'Not Finished'}</td>
            </tr>
        )
    }
}


export default GameRow;