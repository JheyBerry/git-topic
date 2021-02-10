import React, { useState } from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
import DeleteTopic from './delete-topic'

const Topics = ({item}) => {  
    const { user } = useAuth0()
    const [showTopics, setShowTopics] = useState(false)
    const [topicsHTML, setTopics] = useState()

    const getTopics = async () => {
        let config = {
        headers: {
            Accept: "application/vnd.github.mercy-preview+json"
        }}
        
        try {
        const response = await axios(`https://api.github.com/repos/${user.nickname}/${item.name}/topics`, config)
        console.log(response)

        const topics = response.data.names
        
        const noTopic = <p style={{margin: "1rem auto"}}>Any topic here yet...</p>


        const topicsButton = topics.map((itemTopic, index) => {
            return (
            <ButtonToolbar key={index} className="mb-3 mt-3" aria-label="Toolbar with Button groups">
                <ButtonGroup className="mr-1 ml-1" aria-label="First group">
                <Button variant="secondary"
                >{itemTopic}</Button>
                <Button variant="secondary">E</Button>
                <DeleteTopic item={topics} repo={item.name}/>
                </ButtonGroup>
            </ButtonToolbar>
            ) 
        })
        
        const topicsList = topics.length === 0 ? noTopic : topicsButton
        
        setTopics(
            <div style={{display:"inline-flex"}}>
            {topicsList}
            </div>
        )
        } catch(err) {
        console.log(err)
        }
    }
    
    const topics = showTopics ? topicsHTML : <></>
    
    return (
        <div>
            <Button 
            type="button" 
            variant="danger"
            className="dropdown-toggle" 
            block
            onClick={() => {
                setShowTopics(true)
                getTopics()
            }}> See Repository Topics </Button>
            {topics}
        </div>
    )
}

export default Topics
