import React from 'react'
import Lottie from 'react-lottie'
import PropTypes from 'prop-types'

const LoadingAnimation = ({ lotti }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMinYMin slice',
    },
  }

  return (
    <div className="loading-animation">
      <Lottie options={defaultOptions} />
    </div>
  )
}

LoadingAnimation.propTypes = {
  lotti: PropTypes.any,
}

export default LoadingAnimation
