import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const AddTopics = () => {
  return (
    <div>
      <InputGroup className="mb-2">
        <FormControl placeholder="Add topic... (still in construction)" />
        <InputGroup.Prepend>
          <Button type="submit" variant="secondary">
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  )
}

export default AddTopics
