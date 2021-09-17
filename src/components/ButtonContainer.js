import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

const ButtonContainer = () => {
    const {isAuthenticated} = useAuth0();

    return (
        !isAuthenticated ? <LoginButton /> : <LogoutButton />     
    )
}

export default ButtonContainer
