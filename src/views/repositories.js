import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
import { RepoCard } from '../components'

const MyRepos = () => {  
  const { user } = useAuth0()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios(`https://api.github.com/users/${user.nickname}/repos`)
        
        setRepos(response.data);
        console.log(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    
    search()
  }, [])

  const listRepos = repos.length !== 0 ? (
    repos.map((item) => {
      return <RepoCard key={item.id} item={item}/>
    })
  ) : (
    <p>Any Repository</p>
  )

  return (
    <div>
      {listRepos}
    </div>
  )
}

export default MyRepos
