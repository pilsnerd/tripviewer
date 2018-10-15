import React, { Component } from 'react';
import TripMapContainer from './maps/tripmapcontainer';
import GalleryContainer from './gallerycontainer';
import { getTrip } from '../api/pilsnerdApi';

class Trip extends Component {
  constructor(props) {
    super(props);

    // console.log('trip id', props.match.params.id);

    this.state = {
      tripId: props.match.params.id,
      trip: { places: [], pictures: [] },
      place: {
        pictures: []
      },
      picturePlace: {
        pictures: []
      }
    };

    this.loadPlace = this.loadPlace.bind(this);
    this.loadPicturePlace = this.loadPicturePlace.bind(this);
    this.picturePlaceMapZoomChanged = this.picturePlaceMapZoomChanged.bind(this);
  }

  componentDidMount() {
    // console.log('did mount');
    this.loadTrip(this.state.tripId);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`did update ${prevState.path} --> ${this.state.path}`);
  }

  loadTrip(tripId) {
    // console.log(tripId);
    getTrip(tripId)
      .then(trip => {
        console.log('extracting places from pictures...');
        trip.picturePlaces = this.extractPlacesFromPictures(trip.pictures, trip.mapZoomLevel);
        // console.log(trip.places);
        this.setState({
          tripId: tripId,
          trip: trip
        })
      });
  }

  extractPlacesFromPictures(pictures, mapZoomLevel) {
    var places = [];
    var nextPlaceId = 1;
    for (var i = 0; i < pictures.length; i++) {
      var foundExistingPlace = false;
      for (var j = 0; j < places.length; j++) {
        if (this.placesAreSimilar(pictures[i], places[j], mapZoomLevel)) {
          places[j].pictures.push(pictures[i]);
          places[j].name = places[j].pictures.length + ' pictures';
          foundExistingPlace = true;
        }
      }
      if (!foundExistingPlace) {
        var place = {
          placeId: nextPlaceId++,
          name: pictures[i].pictureId,
          description: '',
          latitude: pictures[i].latitude,
          longitude: pictures[i].longitude,
          startDate: pictures[i].dateTaken,
          endDate: pictures[i].dateTaken,
          pictures: [pictures[i]]
        };
        places.push(place);
      }
    }
    return places;
  }
  placesAreSimilar(placeOne, placeTwo, mapZoomLevel) {
    var latitudeOne = placeOne.latitude + '';
    var longitudeOne = placeOne.longitude + '';
    var latitudeTwo = placeTwo.latitude + '';
    var longitudeTwo = placeTwo.longitude + '';
    var comparisonPrecision = 6;
    if (mapZoomLevel < 15) {
      comparisonPrecision = 5;
    }
    if (latitudeOne.substring(0, comparisonPrecision) === latitudeTwo.substring(0, comparisonPrecision)
      && longitudeOne.substring(0, comparisonPrecision + 1) === longitudeTwo.substring(0, comparisonPrecision + 1)) {
      return true;
    }
    return false;
  }



  renderPlaceList() {
    const places = this.state.trip.places.map(place => {
      const placeLink = () => this.loadPlace(place.placeId);
      return (
        <tr key={place.placeId}>
          <td>
            <a onClick={placeLink} cursor={'pointer'}>
              {this.renderDates(place.startDate, place.endDate)}
              <span> - {place.name}</span>
            </a>
          </td>
        </tr>
      );
    });
    return (
      <table>
        <tbody align="left">
          {places}
        </tbody>
      </table>
    );
  }

  renderPlace(place) {
    return (
      <span>
        <h3>{place.name}</h3>
        <br />
        {place.description}
        <br />
        {this.renderDates(place.startDate, place.endDate)}
        <br />
        {this.renderPictureList(place.pictures)}
      </span>
    );
  }

  renderPictureList(pictures) {
    var i = 0;
    return pictures.map(picture => {
      i++;
      var b = "";
      if (i === 5) {
        b = <br />
        i = 0;
      }
      var thumbnailUrl = picture.thumbnailUrl;
      if (thumbnailUrl === undefined) {
        const thumbnail = picture.pictureId.replace(".JPG", "_s.JPG");
        thumbnailUrl = picture.pictureFolderUrl + thumbnail;
      }
      return (
        <span key={picture.pictureId} style={{ margin: "5px" }}>
          <img src={thumbnailUrl} alt={picture.pictureId} />
          {b}
        </span>
      );
    });
  }

  renderDates(startDate, endDate) {
    var theDate = startDate;
    if (endDate && startDate !== endDate) {
      theDate += ' to ' + endDate;
    }
    return (
      <span>{theDate}</span>
    );
  }

  loadPlace(placeId) {
    console.log('load place for placeId ' + placeId);
    console.log('state', this.state);
    const trip = this.state.trip;
    let place = {};
    for (var i = 0; i < trip.places.length; i++) {
      trip.places[i].icon = "Yellow";

      // if (trip.places[i].placeId < placeId) {
      //   trip.places[i].icon = "BlackArrowSmall";
      // }
      if (trip.places[i].placeId == placeId) {
        place = trip.places[i];
        place.icon = "RedArrow";
      }
      // if (trip.places[i].placeId > placeId) {
      //   trip.places[i].icon = "Yellow";
      // }
    }
    console.log('place', place);
    this.setState({
      ...this.state,
      trip,
      place
    });
  }





  renderPicturePlace(place) {
    return (
      <span>
        {/* <h3>{place.name}</h3>
        <br />
        {place.description}
        <br /> */}
        {this.renderPicturePlacePictures(place.pictures)}
      </span>
    );
  }
  renderPicturePlacePictures(pictures) {
    // var i = 0;
    // var lastDate = '';
    // return pictures.map(picture => {
    //   i++;
    //   var lineBreak = "";
    //   if (i === 5) {
    //     lineBreak = <br />
    //     i = 0;
    //   }
    //   var thumbnailUrl = picture.thumbnailUrl;
    //   if (thumbnailUrl === undefined) {
    //     const thumbnail = picture.pictureId.replace(".JPG", "_s.JPG");
    //     thumbnailUrl = picture.pictureFolderUrl + thumbnail;
    //   }
    //   var dateToShow = "";
    //   if (picture.dateTaken !== lastDate) {
    //     dateToShow = <span><br />{picture.dateTaken}<br /></span>;
    //     // i = 0;
    //   }
    //   const pictureTitle = picture.pictureId + ' -- ' + picture.timeTaken;
    //   lastDate = picture.dateTaken;
    //   return (
    //     <span key={picture.pictureId} style={{ margin: "5px" }}>
    //       {dateToShow}
    //       <img src={thumbnailUrl} title={pictureTitle} />
    //       {lineBreak}
    //     </span>
    //   );
    // });
    var galleryPictures = [];
    for (var i = 0; i < pictures.length; i++) {
      const picture = pictures[i];
      var thumbnailUrl = picture.thumbnailUrl;
      if (thumbnailUrl === undefined) {
        const thumbnail = picture.pictureId.replace(".JPG", "_s.JPG");
        thumbnailUrl = picture.pictureFolderUrl + thumbnail;
      }
      var dateTaken = picture.dateTaken + ' ' + picture.timeTaken;
      const galleryPicture = {
        original: picture.pictureUrl,
        thumbnail: thumbnailUrl,
        originalTitle: dateTaken,
        thumbnailTitle: dateTaken,
        description: 'Taken ' + dateTaken
      };
      galleryPictures.push(galleryPicture);
    }
    if (galleryPictures.length > 0) {
      return <GalleryContainer pictures={galleryPictures} />
    }
    else {
      return <span />
    }
  }
  loadPicturePlace(placeId) {
    console.log('load pictureplace for placeId ' + placeId);
    console.log('state', this.state);
    const trip = this.state.trip;
    let place = {};
    for (var i = 0; i < trip.picturePlaces.length; i++) {
      trip.picturePlaces[i].icon = "Yellow";
      if (trip.picturePlaces[i].placeId == placeId) {
        place = trip.picturePlaces[i];
        place.icon = "RedArrow";
      }
    }
    console.log('pictureplace', place);
    this.setState({
      ...this.state,
      trip,
      picturePlace: place
    });
  }
  picturePlaceMapZoomChanged(newZoom) {
    console.log('zoom changed');
    console.log('zoomLevel', newZoom);
  }



  render() {
    const trip = this.state.trip;
    // const places = trip.places.map(place => {
    //   return (
    //     <div key={place.placeId}>
    //       {place.name}
    //       <br />
    //       {this.renderPictureList(place.pictures)}
    //     </div>
    //   );
    // });
    return (
      <div>
        <h2>{trip.name}</h2>
        {this.renderDates(trip.startDate, trip.endDate)}



        <table style={{ height: "600px" }}>
          <tbody>
            <tr>
              <td rowSpan="2">
                <TripMapContainer
                  defaultZoomLevel={trip.mapZoomLevel}
                  defaultCenterLocation={trip.mapCenter}
                  places={this.state.trip.picturePlaces}
                  onClick={this.loadPicturePlace}
                  onZoomChanged={this.picturePlaceMapZoomChanged} />
              </td>
              <td>
                {this.renderPicturePlace(this.state.picturePlace)}
              </td>
            </tr>
          </tbody>
        </table>



        {/* <br />
        <h3>Places:</h3>
        <ul>
          {places}
        </ul> */}
        {/* <h3>Pictures:</h3>
        <ul>
          {this.renderPictureList(trip.pictures)}
        </ul> */}

        {/* <table style={{ height: "600px" }}>
          <tbody>
            <tr style={{ "height": "200px" }}>
              <td rowSpan="2">
                <TripMapContainer
                  defaultZoomLevel={trip.mapZoomLevel}
                  defaultCenterLocation={trip.mapCenter}
                  places={trip.places}
                  onClick={this.loadPlace} />
              </td>
              <td>
                {this.renderPlaceList()}
              </td>
            </tr>
            <tr style={{ "height": "400px" }}>
              <td>
                {this.renderPlace(this.state.place)}
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  }

}

export default Trip;
