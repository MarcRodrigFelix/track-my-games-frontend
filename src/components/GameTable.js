import React, { Component } from 'react'

export default class GameTable extends Component {
    render() {
        const gameEntries = Object.entries(this.props.games).map( game => Object.entries(game))

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
                            </tr>
                            )}
                   </tbody>
                </table>
            </div>
        )
    }
}
