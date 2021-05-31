import React from 'react'
import Alert from 'react-bootstrap/Alert';


const UserProfile = (props) => {

    return (
        <div>
            <Alert variant="info">
                <Alert.Heading>Logged In User Info</Alert.Heading>
                <p> Username: { props.user.username } </p>
                <p> Games being tracked: { props.user.games.length } games </p>
            </Alert>
        </div>
    )
}


export default UserProfile;