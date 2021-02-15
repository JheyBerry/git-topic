import React from "react"
import home from "./../assets/home.svg"

const Home= () => {

  return (
      <div className="text-left" style={{margin:"0 auto", width:"75%", height:"100%"}}>
        <div style={{width:"50%", float:"left", margin:"14% 0"}}>
          <h1 style={{fontSize:"300%"}}>Welcome to Git Topics</h1>
          <h2 style={{color:"gray", margin:"5% 0", fontSize:"200%"}}>The easiest way to tag and find your repositories.</h2>
        </div>
        <div>
          <img src={home} style={{width:"50%"}}></img>
        </div>
      </div>
  );
};

export default Home;
