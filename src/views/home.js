import React from "react"
import drawing from "./../assets/drawing.png"

const Home= () => {

  return (
      <div className="text-left" style={{margin:"0 auto", width:"100%"}}>
        <div style={{width:"50%", float:"left", margin:"14% 0"}}>
          <h1 style={{fontSize:"400%"}}>Welcome to Git Topics</h1>
          <h2 style={{color:"gray", paddingTop:"5%", fontSize:"250%"}}>The easiest way to tag and find your repositories.</h2>
        </div>
        <div>
          <img src={drawing} style={{width:"50%"}}></img>
        </div>
      </div>
  );
};

export default Home;
