import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import DeleteTopic from './delete-topics'
import EditTopic from './edit-topics'
import PropTypes from 'prop-types'

const Topics = ({ repo }) => {
  const { user } = useAuth0()
  const [showTopics, setShowTopics] = useState(false)
  const [topicsHTML, setTopics] = useState()

  const getTopics = async () => {
    let config = {
      headers: {
        Accept: 'application/vnd.github.mercy-preview+json',
      },
    }

    try {
      const response = await axios(
        `https://api.github.com/repos/${user.nickname}/${repo}/topics`,
        config
      )
      console.log(response)

      const topics = response.data.names

      const noTopic = (
        <p style={{ margin: '1rem 1rem' }}>There is no topic here yet...</p>
      )

      // eslint-disable-next-line no-unused-vars
      const topicsButton = topics.map((itemTopic, index) => {
        return (
          <button key={topics.status} className="btn-primary">
            {itemTopic}
            <EditTopic item={topics} repo={repo} />
            <DeleteTopic item={topics} repo={repo} />
          </button>
        )
      })

      const topicsList = topics.length === 0 ? noTopic : topicsButton

      setTopics(
        <div style={{ display: 'inline-flex', margin: 'auto' }}>
          {topicsList}
        </div>
      )
    } catch (err) {
      console.log(err)
    }
  }

  const topics = showTopics ? topicsHTML : <></>

  return (
    <div>
      <Button
        variant="dark"
        type="button"
        className="dropdown-toggle"
        onClick={() => {
          setShowTopics(true)
          getTopics()
        }}
      >
        {' '}
        See Topics{' '}
      </Button>
      {topics}
    </div>
  )
}

Topics.propTypes = {
  repo: PropTypes.string,
}

export default Topics
