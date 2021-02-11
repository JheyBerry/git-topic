import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import githubIcon from './../assets/github-light.svg'
import Button from 'react-bootstrap/Button'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <Button
      type="button"
      variant="dark"
      onClick={() => loginWithRedirect()}
    >
      <img className="icon" src={githubIcon} style={{padding: "0.5rem 0.5rem 0.7rem 0rem"}}></img>
      Log In with GitHub
    </Button>
  )
}

export default LoginButton
