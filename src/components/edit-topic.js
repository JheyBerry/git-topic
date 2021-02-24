import React from 'react'
import { Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import editIcon from './../assets/pencil.svg'
import axios from 'axios'
import PropTypes from 'prop-types'

const EditTopic = ({ topics, repo }) => {
  const { user } = useAuth0()

  const ediTopic = async () => {
    let config = {
      method: 'put',
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
      data: {
        names: [topics],
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
          ediTopic()
        }}
      >
        <img className="button-icon" src={editIcon}></img>
      </Button>
    </div>
  )
}

EditTopic.propTypes = {
  topics: PropTypes.array,
  repo: PropTypes.string,
}

export default EditTopic
