import React from "react";
import Lottie from "react-lottie";

const HomeAnimation = ({ lotti }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid meet",
    },
  };

  return (
    <div className="home-animation">
      <Lottie options={defaultOptions}/>
    </div>
  );
}

export default HomeAnimation