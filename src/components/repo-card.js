import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

const RepoCard = ({item}) => {  
  const { user } = useAuth0()
  const [showTopics, setShowTopics] = useState(false)
  const [topicsHTML, setTopics] = useState()

  
  const getTopics = async () => {
    let config = {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    }

    try {
      const response = await axios(`https://api.github.com/repos/${user.nickname}/${item.name}/topics`, config)
      console.log(response)

      const topics = response.data.names
      console.log(topics)

      const topicsList = topics.map((item, index) => {
        return <span className="badge bg-warning text-dark" key={index}>{item}</span>
          
      })

      setTopics(
        <ul>

          {topicsList}
        </ul>
      )
    } catch(err) {
      console.log(err)
    }
  }

  const topics = showTopics ? topicsHTML : <></>
    
  return (
    <div className="card" key={item.id}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.id}</h6>
        <p className="card-text">{item.description}</p>
        <a href= {item.svn_url} target="_blank" className="card-link">{item.svn_url}</a>
      </div>
      <button  type="button" className="btn btn-primary" onClick={() => {
        setShowTopics(true)
        getTopics()
      }}>See Topics</button>
      {topics}
    </div> 
  )
}
      
export default RepoCard
