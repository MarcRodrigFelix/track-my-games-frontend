const initialGameForm = {
    title: '',
    platform: '',
    kind: '',
    // is_completed: false
}

const initialLoginForm = {
    username: '',
    password: '',
    passwordConfirmation: ''
}

const initialState = {
    id: null,
    username: null,
    signup: false,
    loginForm: initialLoginForm,
    gameForm: initialGameForm,
    selectedGame: {},
    games: []
}

const userReducer = (state = initialState, action) => {
// debugger;
    switch(action.type) {
        case 'TOGGLE_SIGNUP':
            return {...state, signup: !state.signup};

        case 'LOGIN_FORM_CHANGE':
            return {...state, loginForm: {
                ...state.loginForm,
            [action.payload.name]: action.payload.value
        }};

        case 'SET_CURRENT_USER':
                return { ...state, 
                    ...action.payload.user,
                    games: [...state.games, ...action.payload.games]
                };

        case 'USER_LOGOUT':
            return { ...state, username: null, id: null, games: [] };

        case 'GAME_FORM_CHANGE':
            return { ...state, gameForm: {
                ...state.gameForm,
                [action.payload.name]: action.payload.value
            }};

        case 'TRACK_NEW_GAME':
            return { 
                ...state, 
                games: [
                    ...state.games, ...action.payload.games
                ],
                gameForm: initialGameForm
            };
        
        case 'DELETE_GAME':
            return { ...state };

        case 'SET_SELECTED_GAME':
console.log(action.payload)
            return {
                ...state,
                selectedGame: action.payload
            }

        default:
            return { ...state };
    }
};

export default userReducer;
