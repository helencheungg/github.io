import React from 'react';
import {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
}

export class GoogleMap extends Component {

  render() {
    return (
      <div className="map">
        <Map google={this.props.google} zoom={15}
        initialCenter={{
          lat: 51.483715,
          lng: -0.031628
        }}

        containerStyle={containerStyle}
        >
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDuuZ8SbAvP-4LK5nRzHs_qLPFzlsVrG-0')
})(GoogleMap)
