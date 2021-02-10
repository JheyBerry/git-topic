import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

const RepoCard = ({item}) => {  
  const { user } = useAuth0()
  const [showTopics, setShowTopics] = useState(false)
  const [topicsHTML, setTopics] = useState()

  const deleteTopic = async (topic) => {
    let config = {
      headers: {
        Accept: "application/vnd.github.mercy-preview+json"
      }
    }

    await axios.put(`https://api.github.com/repos/${user.nickname}/${item.name}/topics`, {names: []}, config)
    .then(function (response) {
      console.log(response);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
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
      
      const noTopic = <p style={{padding:"2rem 7rem"}}>Any topic here yet</p>


      const topicsButton = topics.map((item, index) => {
        return (
          <button className="badge btn-dark btn-lg"  key={index} style={{margin:"0.5rem"}}>
            {item}
            <a type="button" className="btn btn-warning btn-sm" style={{margin:"0.2rem"}}>E</a>
            <a 
              type="button" 
              className="btn btn-danger btn-sm" 
              style={{margin:"0.2rem"}}
              onClick={() => {
                deleteTopic(item)
              }}>x</a>
          </button>
        ) 
      })
      
      const topicsList = topics.length === 0 ? noTopic : topicsButton

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
    <div className="card" key={item.id} style={{display : 'inline-block', width:"100%"}}>
      <div className="card-body" style={{float:"left", width:"50%"}}>
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.id}</h6>
        <p className="card-text">{item.description}</p>
        <a href= {item.svn_url} target="_blank" className="card-link">{item.svn_url}</a>
      </div>
      <div style={{marginLeft:"50%", width:"50%", height:"100%"}}>
      <button 
        type="button" 
        style={{margin:"0.5rem"}}
        className="btn btn-danger" 
        onClick={() => {
          setShowTopics(true)
          getTopics()
        }}> See Topics </button>
      <ul>
        {topics}
      </ul>  
      </div>
    </div> 
  )
}
      
export default RepoCard
