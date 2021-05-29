import { bindActionCreators } from "redux";

export const toggleSignup = () => ({type: 'TOGGLE_SIGNUP'});


export const handleLoginFormChange = (event) => ({
    type: 'LOGIN_FORM_CHANGE',
    payload: {name: event.target.name, value: event.target.value}
});


export const createUserSignup = (userData) => {
    return (dispatch) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then( response => response.json() )
        .then( response => {
            localStorage.token = response.token
            dispatch({ 
                type: 'SET_CURRENT_USER',
                payload: { 
                    user: response.user,
                    games: response.user.games
                 }
            })
        } )
    }
};


export const userLogin = (userData) => {
    return (dispatch) => {
        fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                Accepts: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then( response => response.json() )
        .then( response => {
            localStorage.token = response.token
            dispatch({ 
                type: 'SET_CURRENT_USER',
                payload: { 
                    user: response.user,
                    games: response.user.games
                }
            })
        })
    }
};



export const autoLogin = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/autologin', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            }
        })
        .then( response => response.json() )
        .then( response => {
            dispatch({
                type: 'SET_CURRENT_USER',
                payload: { 
                    user: response.user,
                    games: response.user.games
                }
            })
        })
    }
};


export const logout = () => {
    return (dispatch) => {
        localStorage.clear('token')
        dispatch({ 
            type: 'USER_LOGOUT',
            payload: { 
                username: "",
                password: ""
            } })
    }
}


// ================================================================== GAME ACTIONS

export const handleGameFormChange = (event) => ({
    type: 'GAME_FORM_CHANGE',
    payload: {name: event.target.name, value: event.target.value}
});

// export const toggleCheckboxChange = (checked) => ({
//     type: 'CHECKBOX_CHANGE',
//     payload: { is_completed: !!checked } })


export const submitNewGame = (gameData) => {
    return (dispatch) => {
        fetch('http://localhost:3000/games', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json',
                Accepts: 'application/json',
            },
            body: JSON.stringify( gameData )
        })
        .then( response => response.json() )
        .then( response => {
            dispatch({
                type: 'TRACK_NEW_GAME',
                payload: {
                    games: response.user.games
                }
            })
        })
    }
};


export const deleteGame = (gameId) => {
        return (dispatch) => {
            fetch(`http://localhost:3000/games/${gameId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': localStorage.token,
                    'Content-Type': 'application/json',
                }
            })
            .then( response => {
                dispatch({ type: 'DELETE_GAME' })
            })
        }  
}



export const addSelectedGame = (gameId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/games/${gameId}`)
        .then( response => response.json() )
        .then( game => {
console.log(game)
            dispatch({
                type: 'SET_SELECTED_GAME',
                payload: game
            })
        })
        .catch( error => console.log(error) )
    }
}