import React, { Component } from 'react';
import TripMapContainer from '../maps/tripmapcontainer';

class PhotoMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMap: this.props.showMap
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    const photo = this.props.selectedPhoto;
    const hasLocation = (photo && photo.location && photo.location !== '0, 0');

    const mapZoomLevel = 15;
    var mapCenter = { lat: 47.803091, lng: -91.121813 };
    var place = {
      placeId: 1,
      name: 'name',
      description: 'desc',
      latitude: 47.803091,
      longitude: -91.121813,
      startDate: '2/10/2019',
      endDate: '2/11/2019',
      pictures: [photo]
    };
    if (hasLocation) {
      var coords = photo.location.split(',');
      var lat = coords[0] * 1;
      var lng = coords[1] * 1;
      mapCenter.lat = lat;
      mapCenter.lng = lng;
      place.latitude = lat;
      place.longitude = lng;
    }
    const currentDatePlaces = [place];
    const map = <TripMapContainer
      defaultZoomLevel={mapZoomLevel}
      defaultCenterLocation={mapCenter}
      places={currentDatePlaces}
      onClick={() => { }} />;

    return (
      <div>
        {hasLocation ?
          <div>
            <input name="showMap" type="checkbox" checked={this.state.showMap} onChange={this.handleInputChange} />show map
            {this.state.showMap ? map : ''}
          </div>
          : ''}
      </div>
    );
  }
}

export default PhotoMap;
