export const getGame = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/games')
        .then( response => response.json() )
        .then( data => {
console.log(data)
            dispatch({ type: 'FETCH_GAME_SUCCESS', payload: data })
        })
    }
}


export const createNewGame = newGameData => {
    return (dispatch) => {
        fetch('http://localhost:3000/games',{
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ game: newGameData })
        })
        .then( response => response.json() )
        .then( data => {
            dispatch({ type: 'CREATE_GAME_SUCCESS', payload: data })
        })
    }
}