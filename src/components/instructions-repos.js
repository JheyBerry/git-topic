import React from 'react'
import Arrow from '../assets/decrease.svg'

const InstructionsRepos = () => {
  return (
    <div className="instructions">
      <div className="instructions-animation">
        <h1> Expand a Card Repository</h1>
        <h2> to begin with </h2>
        <img src={Arrow}></img>
      </div>
    </div>
  )
}

export default InstructionsRepos
