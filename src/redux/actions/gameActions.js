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