import React from 'react'
import { Button} from 'react-bootstrap'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'

const DeleteTopic = ({item}) => {  
    const { user } = useAuth0()

    const delTopic = async (repo) => {
        let config = {
        method: "put",
        headers: {
            Accept: "application/vnd.github.mercy-preview+json",
        },
        data: {
            "names": []
        }
        }

        await axios(`https://api.github.com/repos/${user.nickname}/${repo}/topics`, config)
        .then(function (response) {
        console.log(response)
        })
        .catch((error) => {
        console.log(error)
        })
    }

    return(
        <div>
            <Button 
            variant="secondary"
            onClick={() => {
            delTopic(item)}}>
            X</Button>
        </div>
    )
}

export default DeleteTopic
