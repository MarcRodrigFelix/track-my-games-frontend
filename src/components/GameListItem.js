import React from 'react'

export default function GameListItem(props) {
    return (
        <div>
            <h3>{props.game.title}</h3>
            <h2>{props.game.kind}</h2>
        </div>
    )
}
