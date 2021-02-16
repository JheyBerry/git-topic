import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const AddTopic = () => {
    
  return (
    <div>
      <InputGroup className="mb-2">
        <FormControl placeholder="Add topic..." />
        <InputGroup.Prepend>
          <Button type="submit" variant="secondary">
            <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
          </Button>
        </InputGroup.Prepend>
      </InputGroup>
    </div>
  )
}

export default AddTopic
