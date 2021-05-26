import React from 'react'

const UserProfile = (props) => {

    return (
        <div>
            <h4>Logged In User Info:</h4>
            <h5> Username: { props.user.username } </h5>
            <h5> Games being tracked: { props.user.games.length } games </h5>
        </div>
    )
}


export default UserProfile;