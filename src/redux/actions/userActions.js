export const toggleSignup = () => ({type: 'TOGGLE_SIGNUP'})

export const handleLoginFormChange = (event) => ({
    type: 'LOGIN_FORM_CHANGE',
    payload: {name: event.target.name, value: event.target.value}
})