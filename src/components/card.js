import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

const Card = () => {
  const { user } = useAuth0()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const search = async () => {
      try {
        const result = await axios(`https://api.github.com/users/${user.nickname}/starred`)
  
        setRepos(result.data);
      } catch(err) {
        console.log(err)
      }
    }
    
    search()
  })

  const listRepos = repos.length !== 0 ? (
    repos.map((item) => <div className="card" key={item.id}>{ item.name }</div>)
  ) : (
    <p>No repos starred</p>
  )

  return (
    <div>
      <ul>{listRepos}</ul>
    </div>
  )
}

export default Card
