import React, { useState, useEffect } from 'react'
import { Card, Row } from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'

const StarredRepo = () => {
  const { user } = useAuth0()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const search = async () => {
      try {
        const setData = await axios(
          `https://api.github.com/users/${user.nickname}/starred`
        )

        setRepos(setData.data)
        console.log(setData.data)
      } catch (err) {
        console.log(err)
      }
    }
    search()
  }, [])

  const listStarredRepos =
    repos.length !== 0 ? (
      repos.map((item) => {
        return (
          <div key={item.id}>
            <Card className="bg-light card">
              <Card.Title>
                <a href={item.svn_url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </Card.Title>
              <Card.Subtitle>{item.id}</Card.Subtitle>
              <Card.Text>{item.description}</Card.Text>
            </Card>
          </div>
        )
      })
    ) : (
      <p>Any Starred Repository</p>
    )

  return (
    <div>
      <div className="instructions">
        <div className="instructions-animation">
          <h1>Your starred repositories is here</h1>
          <h2> but for now, it is just to look at..</h2>
        </div>
      </div>
      <div className="card-animation">
        <Row>{listStarredRepos}</Row>
      </div>
    </div>
  )
}

export default StarredRepo
