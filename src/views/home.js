import React from 'react'
import { AuthenticationButtonHome } from '../components'
import Animation from '../animation/animation'
import home from '../animation/home.json'

const Home = () => {
  return (
    <div className="App">
      <div>
        <Animation lotti={home} loop={false} aspectRatio={'xMidYMid meet'} />
      </div>
      <div className="home-text">
        <h1>Git Topics</h1>
        <div className="home-text-animation">
          <h2>
            The easiest way to tag and find <br /> your git repositories.
          </h2>
          <AuthenticationButtonHome />
        </div>
      </div>
    </div>
  )
}

export default Home
