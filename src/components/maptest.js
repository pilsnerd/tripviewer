import React, { Component } from 'react';
import TripMap from "./maps/tripmap";

class MapTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zoomLevel: 12,
      centerLocation: { lat: 48.032711, lng: -90.795338 },
      places: [],
      nextPlaceId: 1
    };

    this.markerClicked = this.markerClicked.bind(this);
    this.mapClicked = this.mapClicked.bind(this);
    this.zoomChanged = this.zoomChanged.bind(this);
    this.setZoom = this.setZoom.bind(this);
    this.clearPlaces = this.clearPlaces.bind(this);
  }

  markerClicked(id) {
    console.log(`marker ${id} clicked!`);
    for (var i = 0; i < this.state.places.length; i++) {
      if (this.state.places[i].placeId === id) {
        console.log(`${this.state.places[i].latitude}, ${this.state.places[i].longitude}`);
      }
    }
  }

  mapClicked(e) {
    console.log(`map clicked at ${e.latLng.lat()}, ${e.latLng.lng()}`);
    const newPlace = {
      placeId: this.state.nextPlaceId,
      latitude: e.latLng.lat(),
      longitude: e.latLng.lng()
    };
    const nextPlaceId = this.state.nextPlaceId + 1;
    var newPlaces = this.state.places;
    newPlaces.push(newPlace);
    this.setState({
      places: newPlaces,
      nextPlaceId
    });
  }

  zoomChanged() {
    console.log('zoom changed');
  }

  setZoom(increment) {
    const newZoom = this.state.zoomLevel + increment;
    this.setState({
      zoomLevel: newZoom
    });
  }

  clearPlaces() {
    this.setState({
      places: [],
      nextPlaceId: 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setZoom(-1)}>zoom out</button>
        <span>{this.state.zoomLevel}</span>
        <button onClick={() => this.setZoom(1)}>zoom in</button>
        <br />
        <button onClick={() => this.clearPlaces()}>clear markers</button>
        <TripMap
          defaultZoomLevel={this.state.zoomLevel}
          defaultCenterLocation={this.state.centerLocation}
          places={this.state.places}
          onClick={this.markerClicked}
          onMapClick={this.mapClicked}
          onZoomChanged={this.zoomChanged}
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDSb4C-gJKmzTxM7SmxCQWCW0QM92yi42s&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `600px` }} />}
          mapElement={<div style={{ height: `100%` }}
          />}
        />
      </div>
    );
  }
}

export default MapTest;
