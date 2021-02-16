import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
import DeleteTopic from './delete-topic'
import EditTopic from './edit-topic'

const Topics = ({repo}) => {  
    const { user } = useAuth0()
    const [showTopics, setShowTopics] = useState(false)
    const [topicsHTML, setTopics] = useState()

    const getTopics = async () => {
        let config = {
        headers: {
            Accept: "application/vnd.github.mercy-preview+json"
        }}
        
        try {
        const response = await axios(`https://api.github.com/repos/${user.nickname}/${repo}/topics`, config)
        console.log(response)

        const topics = response.data.names
        
        const noTopic = <p style={{margin: "1rem auto"}}>Any topic here yet...</p>


        const topicsButton = topics.map((itemTopic, index) => {
            return (
                <div className="btn-secondary">
                    {itemTopic}
                    <EditTopic item={topics} repo={repo}/>
                    <DeleteTopic item={topics} repo={repo}/>
                </div>
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
            className="dropdown-toggle" 
            onClick={() => {
                setShowTopics(true)
                getTopics()
            }}> See Topics </Button>
            {topics}
        </div>
    )
}

export default Topics
