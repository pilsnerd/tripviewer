import React from "react";
import { Marker } from "react-google-maps";
import MarkerIconRed from "./redmarker.png";
import MarkerIconYellow from './yellowmarker.png';
import MarkerIconRedArrow from './redarrow.png';
import MarkerIconBlackArrowSmall from './blackarrowsmall.png';

// The marker control documentation can be found at:
//    https://tomchentw.github.io/react-google-maps/#marker
// The react-google-maps Marker is a wrapper around the google maps Marker:
//    https://developers.google.com/maps/documentation/javascript/reference/marker

export default class MapMarker extends React.Component {

  render() {
    var markerIcon = MarkerIconRed;
    switch (this.props.icon) {
      case "Red":
        markerIcon = MarkerIconRed;
        break;
      case "RedArrow":
        markerIcon = MarkerIconRedArrow;
        break;
      case "BlackArrowSmall":
        markerIcon = MarkerIconBlackArrowSmall;
        break;
      default:
        markerIcon = MarkerIconYellow;
    }
    return (
      <Marker
        position={this.props.position}
        icon={markerIcon}
        label={this.props.label}
        title={this.props.title}
        onClick={this.props.onClick}
      >
      </Marker>
    );
  }
}
