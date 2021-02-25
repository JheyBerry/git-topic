import React from 'react'
import LoadingAnimation from '../animation/loading-animation'
import paperplane from '../animation/paperplane.json'

const Loading = () => {
  return (
    <div className="Loading">
      <div>
        <LoadingAnimation lotti={paperplane} />
      </div>
    </div>
  )
}

export default Loading
