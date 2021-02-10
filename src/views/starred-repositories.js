import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

const StarredRepo = () => {  
  const { user } = useAuth0()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const search = async () => {
      try {
        const setData = await axios(`https://api.github.com/users/${user.nickname}/starred`)
  
        setRepos(setData.data);
        console.log(setData.data)
      } catch(err) {
        console.log(err)
      }
    }   
    search()
  }, [])

  const listStarredRepos = repos.length !== 0 ? (
    repos.map((item) => {
      return( 
        <div className="card" key={item.id}>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.id}</h6>
            <p className="card-text">{item.description}</p>
            <a href= {item.svn_url} target="_blank" className="card-link">{item.svn_url}</a>
          </div>
        </div> 
      )
    })
  ) : (
    <p>Any Starred Repository</p>
  )

  return (
    <div>
        {listStarredRepos}
    </div>
  )
}
      
export default StarredRepo
