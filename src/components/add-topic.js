import React from 'react'
import { InputGroup, Button, FormControl } from 'react-bootstrap'

const AddTopic = () => {
    
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text> Topic name:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Type here..." aria-describedby="basic-addon1" />
                <InputGroup.Prepend>
                    <Button type="submit" variant="secondary">Submit</Button>
                </InputGroup.Prepend>
            </InputGroup>
        </div>
    )
}

export default AddTopic
