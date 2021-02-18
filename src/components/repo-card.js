import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import AddTopic from './add-topic'
import Topics from './get-topics'
import PropTypes from 'prop-types'

const RepoCard = ({ item }) => {
  const [cardActive, setCardState] = useState(false)
  let active

  if (cardActive) {
    active = (
      <div>
        <AddTopic item={item} />
        <Topics key={item.name} repo={item.name} />
      </div>
    )
  }

  return (
    <div onClick={() => setCardState(!cardActive)}>
      <Card className={`bg-light ${cardActive ? 'active' : ''}`}>
        <Card.Title>
          <a href={item.svn_url} target="_blank" rel="noreferrer">
            {item.name}
          </a>
        </Card.Title>
        <Card.Subtitle>{item.id}</Card.Subtitle>
        <Card.Text>{item.description}</Card.Text>
        {active}
      </Card>
    </div>
  )
}

RepoCard.propTypes = {
  item: PropTypes.object,
}

export default RepoCard
