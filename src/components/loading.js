import React from 'react'
import Animation from '../animation/animation'
import paperplane from '../animation/paperplane.json'

const Loading = () => {
  return (
    <div className="Loading">
      <div>
        <Animation
          lotti={paperplane}
          loop={true}
          aspectRatio={'xMinYMin slice'}
        />
      </div>
    </div>
  )
}

export default Loading
