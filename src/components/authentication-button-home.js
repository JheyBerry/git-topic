import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './login-button'

const AuthenticationButtonHome = () => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <></> : <LoginButton />
}

export default AuthenticationButtonHome
