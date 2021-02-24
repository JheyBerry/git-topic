import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
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
    <div>
      <Card className={`bg-light card ${cardActive ? 'active' : ''}`}>
        <Button
          className="expand"
          variant="clear"
          type="button"
          onClick={() => setCardState(!cardActive)}
        >
          <i className="fas fa-expand-arrows-alt"></i>
        </Button>
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
