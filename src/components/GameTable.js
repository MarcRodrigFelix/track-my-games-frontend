import React, { Component } from 'react'

export default class GameTable extends Component {
    render() {
// console.log(this.props.games)
//         const gameData = this.props.games.map( (game, index) => { 
//             return <p key={index}> {game.title} </p>
//         })
        const gameEntries = Object.entries(this.props.games).map( game => Object.entries(game))
// console.log(gameEntries[0][1][1])

        return (
            <div>
                 {gameEntries.map( (g) => console.log(g[1][1])) }
                {/* <table>
                <tr>
                    <td>Profile</td>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                    <td>d</td>
                    <td>e</td>
                </tr> */}
                <table>
                    <thead>
                        <tr>
                            <td><strong>Title</strong></td>
                            <td><strong>Platrform</strong></td>
                            <td><strong>Genre</strong></td>
                            <td><strong>Completed</strong></td>
                        </tr>
                    </thead>
                   <tbody>
                            { gameEntries.map( (g) => <tr><td>{g[1][1].title}</td></tr> ) }
                   </tbody>
                </table>
                    {/* {(Object.keys(gameData)
                        .map(key=>({...gameData[key],title:key}))
                        .map(row=>(
                            <tr>
                                {(Object.keys(row)
                                    .map(key=>
                                        <td>
                                            {row[key]}
                                        </td>
                                    )
                                )}
                            </tr>
                        )
                        )
                    )} */}
                {/* </table> */}
            </div>
        )
    }
}
