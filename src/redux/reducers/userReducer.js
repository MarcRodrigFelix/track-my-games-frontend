const initialGameForm = {
    title: '',
    platform: '',
    kind: '',
    is_completed: false
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
            return { ...state, username: null, id: null };

        case 'GAME_FORM_CHANGE':
            return { ...state, gameForm: {
                ...state.gameForm,
                [action.payload.name]: action.payload.value
            }}

        case 'TRACK_NEW_GAME':
            return { ...state, 
                games: [...state.games, ...action.payload.games]
            };

        default:
            return { ...state };
    }
};

export default userReducer;
