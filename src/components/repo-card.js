import React, { useState } from 'react'
import { Card, Button, Row, Modal, Col } from 'react-bootstrap'
import AddTopic from './add-topic'
import Topics from './get-topics'
import PropTypes from 'prop-types'

const RepoCard = ({ item }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const card = () => {
    return (
      <div>
        <Card className="bg-light card">
          <Row>
            <Col xs={10}>
              <Card.Title>
                <a href={item.svn_url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              </Card.Title>
            </Col>
            <Col>
              <Button
                className="expand"
                variant="clear"
                type="button"
                onClick={handleShow}
              >
                <i className="fa fa-external-link"></i>
              </Button>
            </Col>
          </Row>
          <Card.Subtitle>{item.id}</Card.Subtitle>
          <Card.Text>{item.description}</Card.Text>
        </Card>
        {modal()}
      </div>
    )
  }

  const modal = () => {
    return (
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <a href={item.svn_url} target="_blank" rel="noreferrer">
                {item.name}
              </a>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Subtitle>ID: {item.id}</Card.Subtitle>
            <Card.Text>{item.description}</Card.Text>
            <div>
              <AddTopic item={item} />
              <Topics key={item.name} repo={item.name} />
            </div>
          </Modal.Body>
        </Modal>
      </div>
    )
  }

  return <div>{card()}</div>
}

RepoCard.propTypes = {
  item: PropTypes.object,
}

export default RepoCard
