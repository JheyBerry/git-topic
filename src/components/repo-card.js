import React from 'react'
import AddTopic  from './add-topic'
import Topics from './get-topics'

const RepoCard = ({item}) => {
  return (
    <div className="card" style={{width:"100%"}}>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{item.id}</h6>
        <p className="card-text">{item.description}</p>
        <a href= {item.svn_url} target="_blank" className="card-link">{item.svn_url}</a>
      </div>
      <div>
        <AddTopic item={item}/>
        <Topics key={item.name} item={item}/>
      </div>
    </div> 
  )
}

export default RepoCard
