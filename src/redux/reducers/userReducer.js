

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
    // games: []
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
                // games: [...state.user.games, ...action.payload.games]
            };

        case 'USER_LOGOUT':
            return { ...state, username: null, id: null };

        default:
            return { ...state };
    }
};

export default userReducer;