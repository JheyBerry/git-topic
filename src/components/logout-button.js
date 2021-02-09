import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import githubIcon from './../assets/github-dark.svg'

const LogoutButton = () => {
  const { logout } = useAuth0()
  return (
    <button
      type="button"
      className="btn btn-outline-secondary btn-block"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
       <img className="icon" src={githubIcon} style={{padding: "0.5rem 0.5rem 0.7rem"}}></img>
      Log Out
    </button>
  )
}

export default LogoutButton
