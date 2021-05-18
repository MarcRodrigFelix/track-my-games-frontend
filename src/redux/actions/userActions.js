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
        .then( response => {
            localStorage.token = response.token
            disptach({ 
                type: 'SET_CURRENT_USER',
                payload: { user: response.user }
            })
        } )
    }
}


export const userLogin = (userData) => {
    return (disptach) => {
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
            disptach({ 
                type: 'SET_CURRENT_USER',
                payload: { user: response.user }
            })
        })
    }
}



export const autoLogin = () => {
    return (disptach) => {
        fetch('http://localhost:3000/autologin', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token
            }
        })
        .then( response => response.json() )
        .then( response => {
            disptach({ 
                type: 'SET_CURRNET_USER',
                payload: { user: response.user }
            })
        })
    }
}