import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty';

const Profile = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture}/>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
                {/* <JSONPretty data={user} />     */}
            </div>
        )
        
    )
}

export default Profile
