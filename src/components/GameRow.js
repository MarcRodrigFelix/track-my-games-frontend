import React, { Component } from 'react'

class GameRow extends Component {
    render() {
        const game = this.props.game
        
        return (
            <tr>
                <td>{game.title}</td>
                <td>{game.platform}</td>
                <td>{game.kind}</td>
                <td>{game.is_completed ? 'Finished' : 'Not Finished'}</td>
                <td><button onClick={() => ( this.props.handleOnClick(game.id) )}>Delete</button></td>
            </tr>
        )
    }
}

export default GameRow;