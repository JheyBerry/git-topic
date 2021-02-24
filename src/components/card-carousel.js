/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import { useAuth0 } from '@auth0/auth0-react'
import axios from 'axios'
import { RepoCard } from '../components'

const CardCarousel = () => {
  const { user } = useAuth0()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios(
          `https://api.github.com/users/${user.nickname}/repos`
        )

        setRepos(response.data)
        console.log(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    search()
  }, [])

  const listRepos =
    repos.length !== 0 ? (
      repos.map((item) => {
        return <RepoCard key={item.type} item={item} />
      })
    ) : (
      <p>Any Repository</p>
    )

  return <Row>{listRepos}</Row>
}

export default CardCarousel
