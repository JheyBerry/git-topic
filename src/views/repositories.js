import React, { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel'
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios'
import { RepoCard } from '../components'

const MyRepos = () => {  
  const { user } = useAuth0()
  const [repos, setRepos] = useState([])

  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios(`https://api.github.com/users/${user.nickname}/repos`)
        
        setRepos(response.data);
        console.log(response.data)
      } catch(err) {
        console.log(err)
      }
    }
    
    search()
  }, [])

  const responsive = [
    {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
      paritialVisibilityGutter: 60
    },
    {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
      paritialVisibilityGutter: 50
    },
    {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  ]

  const listRepos = repos.length !== 0 ? (
    repos.map((item) => {
      return <RepoCard key={item.id} item={item}/>
    })
  ) : (
    <p>Any Repository</p>
  )
  
  const carousel = () => {
    return (
      <Carousel
        ssr
        partialVisbile
        itemClass="image-item"
        responsive={responsive}
      >
        {listRepos}
      </Carousel>
    );
  };

  return (
    carousel()
  )
}

export default MyRepos
