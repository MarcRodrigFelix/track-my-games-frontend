export const toggleSignup = () => ({type: 'TOGGLE_SIGNUP'})

export const handleLoginFormChange = (event) => ({
    type: 'LOGIN_FORM_CHANGE',
    payload: {name: event.target.name, value: event.target.value}
})

export const createUserSignup = (userData) => {
    return (disptach) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then( response => response.json() )
        .then( data => {
            disptach({ 
                type: 'CREATE_USER_SUCCESS',
                payload: { user: data.user }
            })
        } )
    }
}