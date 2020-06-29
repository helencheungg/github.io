import React from 'react';
import BgImg from '../style/images/03.JPEG';
import GoogleMap from './map';
import { ParallaxBanner } from 'react-scroll-parallax';

function Contact(){
  return (
    <div id="contact">
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
      <div className="parallax-children justify-content-around">
      <div className="card">
        <div className="card-header"><h2 className="card-title text-center p-4">Opening Hours</h2></div>
        <div className="card-body">
          <div className="card-text text-center">
            <table className="table table-hover table-dark">
              <tbody>
                <tr>
                  <td>Mon-Sat</td>
                  <td>11am - 3pm &nbsp;&nbsp; | &nbsp;&nbsp; 4:30pm - 11pm</td>
                </tr>
                <tr>
                  <td>Sun</td>
                  <td>CLOSED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
          <div className="card">
            <div className="card-header"><h2 className="card-title text-center p-4">Contact Us</h2></div>
            <div className="card-body">
              <div className="card-text text-center">
                <table className="table table-hover table-dark">
                  <tbody>
                    <tr>
                      <td>Phone</td>
                      <td>020 8694 8255</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>206 Evelyn Street<br/> Deptford<br/> London<br/> SE8 5NL</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    </ParallaxBanner>

    <GoogleMap/>
  </div>
  )
}

export default Contact;
