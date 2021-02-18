import React from 'react'
import Card from 'react-bootstrap/Card'
import AddTopic from './add-topic'
import Topics from './get-topics'
import PropTypes from 'prop-types'

const RepoCard = ({ item }) => {
  return (
    <div>
      <Card className="bg-light" style={{ width: '25rem' }}>
        <Card.Title>
          <a href={item.svn_url} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        </Card.Title>
        <Card.Subtitle>{item.id}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        <div>
          <AddTopic item={item} />
          <Topics key={item.name} repo={item.name} />
        </div>
      </Card>
    </div>
  )
}

RepoCard.propTypes = {
  item: PropTypes.any,
}

export default RepoCard
