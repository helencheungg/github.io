import React from 'react';
import hero from '../style/videos/01.mp4';

function VideoBg(){
  return (
    <video className="hero-video" autoPlay loop muted>
      <source src={hero} type="video/mp4"/>
    </video>
  )
}

export default VideoBg;
