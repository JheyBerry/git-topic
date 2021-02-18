import React from 'react'
import Lottie from 'react-lottie'
import PropTypes from 'prop-types'

const HomeAnimation = ({ lotti }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet',
    },
  }

  return (
    <div className="home-animation">
      <Lottie options={defaultOptions} />
    </div>
  )
}

HomeAnimation.propTypes = {
  lotti: PropTypes.any,
}

export default HomeAnimation
