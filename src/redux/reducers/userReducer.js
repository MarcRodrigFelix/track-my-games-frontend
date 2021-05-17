const initialLoginForm = {
    username: '',
    password: '',
    passwordConfirmation: ''
}

const initialState = {
    id: null,
    username: null,
    signup: false,
    loginForm: initialLoginForm
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'TOGGLE_SIGNUP':
            return {...state, signup: !state.signup}
        default:
            return {...state}
    }
}

export default userReducer;