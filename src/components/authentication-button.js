import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import LogoutButton from './logout-button'

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0()

  return isAuthenticated ? <LogoutButton /> : <></>
}

export default AuthenticationButton
