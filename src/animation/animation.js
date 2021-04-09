import React from 'react'
import Lottie from 'react-lottie'
import PropTypes from 'prop-types'

const Animation = ({ lotti, loop, aspectRatio }) => {
  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: aspectRatio,
    },
  }

  return (
    <div className="home-animation">
      <Lottie options={defaultOptions} />
    </div>
  )
}

Animation.propTypes = {
  lotti: PropTypes.any,
  loop: PropTypes.any,
  aspectRatio: PropTypes.any,
}

export default Animation
