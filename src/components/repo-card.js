import React from 'react'
import Card from 'react-bootstrap/Card'
import AddTopic  from './add-topic'
import Topics from './get-topics'
import CardBackground from './../assets/card-bg.svg'

const RepoCard = ({item}) => {
  return (
    <div>
      <Card className="bg-dark text-white" style={{ width: '25rem' }}>
        <Card.Img src={CardBackground} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>
            <a href= {item.svn_url} target="_blank">{item.name}</a>
          </Card.Title>
          <Card.Subtitle>{item.id}</Card.Subtitle>
          <Card.Text>{item.description}</Card.Text>
          <div>
            <AddTopic item={item}/>
            <Topics key={item.name} item={item}/>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div> 
  )
}

export default RepoCard
