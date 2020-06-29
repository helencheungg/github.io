import React from 'react';
import BgImg from '../style/images/05.jpeg';
import { ParallaxBanner } from 'react-scroll-parallax';

function MenuSection(){
  return (
    <div id="menuSection">
      <ParallaxBanner
        layers={[
            {
                image:
                    BgImg,
                amount: 0.2,
            },
        ]}
        style={{
          height: '80vh',
      }}
    >
      <div className="parallax-children">
        <div className="w-75">
          <h2 className="display-4">Menu</h2>
          <p className="lead">
            We have a variety of food, from fish to spring rolls.
            <br/>
            <a className="btn btn-primary btn-lg btn mt-4" href="/menu">Click here to view our menu</a>
          </p>
        </div>
      </div>
    </ParallaxBanner>
  </div>
  )
}

export default MenuSection;
