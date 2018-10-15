import React from "react";
import TripMap from "./tripmap";

// The code for integrating Google Maps was taken from:
//    https://medium.com/@morgannegagne/google-maps-with-react-951c12b723ad

export default class TripMapContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultZoomLevel: this.props.defaultZoomLevel
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('new zoom level', nextProps.defaultZoomLevel);
    return {
      ...prevState,
      defaultZoomLevel: nextProps.defaultZoomLevel
    };
  }

  render() {
    return (
      <TripMap
        defaultZoomLevel={this.state.defaultZoomLevel}
        defaultCenterLocation={this.props.defaultCenterLocation}
        places={this.props.places}
        onClick={this.props.onClick}
        onZoomChanged={this.props.onZoomChanged}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDSb4C-gJKmzTxM7SmxCQWCW0QM92yi42s&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }}
        />}
      />
    );
  }
}
