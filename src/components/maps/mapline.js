import React from "react";
import { Polyline } from "react-google-maps";
import MarkerIconRed from "./redmarker.png";
import MarkerIconYellow from './yellowmarker.png';
import MarkerIconRedArrow from './redarrow.png';
import MarkerIconBlackArrowSmall from './blackarrowsmall.png';

// The marker control documentation can be found at:
//    https://tomchentw.github.io/react-google-maps/#marker
// The react-google-maps Marker is a wrapper around the google maps Marker:
//    https://developers.google.com/maps/documentation/javascript/reference/marker

export default class MapLine extends React.Component {

  render() {
    var symbolOne = {
      path: 'M -2,0 0,-2 2,0 0,2 z',
      strokeColor: '#F00',
      fillColor: '#F00',
      fillOpacity: 1
    };
    var symbolTwo = {
      path: 'M -2,0 0,-2 2,0 0,2 z',
      strokeColor: '#F0F',
      fillColor: '#F0F',
      fillOpacity: 1
    };
    var icons= [
      {
        icon: symbolOne,
        offset: '0%'
      }, {
        icon: symbolTwo,
        offset: '100%'
      }
    ];
    var options= {
      strokeColor: '#FF0000',
      icons
    };
    return (
      <Polyline
        path={this.props.path}
        options={options}
      >
      </Polyline>
    );
  }
}
