import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import githubIcon from './../assets/github-light.svg'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      type="button"
      className="btn btn-dark btn-block"
      onClick={() => loginWithRedirect()}
    >
      <img className="icon" src={githubIcon} style={{padding: "0.5rem 0.5rem 0.7rem 0rem"}}></img>
      Log In with GitHub
    </button>
  )
}

export default LoginButton
