import React from "react"
import drawing from "./../assets/drawing.png"

const Home= () => {

  return (
      <div className="align-items-center row profile-header">
        <div style={{width:"50%"}}>
          <h1>Welcome to Git Topics</h1>
          <h2>The easiest way to tag and find your repositories.</h2>
        </div>
        <div>
          <img src={drawing} style={{width:"40%"}}></img>
        </div>
      </div>
  );
};

export default Home;
