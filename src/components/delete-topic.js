import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import deleteIcon from './../assets/clear.svg'
import PropTypes from 'prop-types'
import axios from 'axios'

const DeleteTopic = ({ repo }) => {
  const { user } = useAuth0()

  const delTopic = async () => {
    let config = {
      method: 'put',
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
      data: {
        names: [],
      },
    }

    await axios(
      `https://api.github.com/repos/${user.nickname}/${repo}/topics`,
      config
    )
      .then(function (response) {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <Button
        variant="clear"
        size="sm"
        onClick={() => {
          delTopic()
        }}
      >
        <img className="button-icon" src={deleteIcon}></img>
      </Button>
    </div>
  )
}

DeleteTopic.propTypes = {
  repo: PropTypes.string,
}

export default DeleteTopic
