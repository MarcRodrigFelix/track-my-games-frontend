import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = (props) => {
console.log(props.user)

    // axios/fetch for logout from backend
    const handleClick = () => {
        axios.delete('http://localhost:3000/logout', {
            withCredentials: true
        })
        .then( response => {
            props.handleLogout()
            props.history.push('/')
        })
        .catch( error => console.log(error) )
    }

    const renderLogout = () => {
        if (props.user) {
            return <Link to="/logout" onClick={handleClick}>Log Out</Link>
        }
    }

    return (
        <div>
            <div>
                <Link to="/login">Log In</Link>
                <br></br>
                <Link to="/signup">Sign Up</Link>
            </div>
            <div>
                {/* if looged in, show Log out link for user */}
                { renderLogout() }
            </div>
        </div>
        

    )
}


export default connect()(Home);