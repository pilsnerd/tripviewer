import React, { Component } from 'react';
import TripMapContainer from './maps/tripmapcontainer';
import GalleryContainer from './gallerycontainer';
import { getTripByDate } from '../api/pilsnerdApi';

class TripByDate extends Component {
  constructor(props) {
    super(props);

    console.log('trip id', props.match.params.id);

    this.state = {
      tripId: props.match.params.id,
      trip: { dates: [] }
    };

    this.loadPlacePictures = this.loadPlacePictures.bind(this);
  }

  componentDidMount() {
    console.log('did mount');
    this.loadTrip(this.state.tripId);
  }

  loadTrip(tripId) {
    console.log(tripId);
    getTripByDate(tripId)
      .then(trip => {
        this.setState({
          tripId: tripId,
          trip: trip
        })
      });
  }

  loadDate(dateToLoad) {
    var currentDate = {};
    for (var i = 0; i < this.state.trip.dates.length; i++) {
      if (this.state.trip.dates[i].date == dateToLoad) {
        currentDate = this.state.trip.dates[i];
      }
    }
    var currentDatePlaces = [];
    if (currentDate) {
      console.log(currentDate.pictures);
      currentDatePlaces = this.extractPlacesFromPictures(currentDate.pictures, currentDate.mapZoomLevel);
    }
    this.setState({
      ...this.state,
      currentDate,
      currentDatePlaces,
      currentPlace: null
    })
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
    var latitudeOne = placeOne.latitude * 1.0;//+ '';
    var longitudeOne = placeOne.longitude * 1.0;//+ '';
    var latitudeTwo = placeTwo.latitude * 1.0;//+ '';
    var longitudeTwo = placeTwo.longitude * 1.0;//+ '';
    var comparisonPrecision = 0.1;//6;
    if (mapZoomLevel == 16) {
      comparisonPrecision = 0.0006;
    }
    if (mapZoomLevel == 13) {
      comparisonPrecision = 0.006;
    }
    if (mapZoomLevel < 13) {
      comparisonPrecision = 0.01;//5;
    }
    // if (latitudeOne.substring(0, comparisonPrecision) === latitudeTwo.substring(0, comparisonPrecision)
    //   && longitudeOne.substring(0, comparisonPrecision + 1) === longitudeTwo.substring(0, comparisonPrecision + 1)) {
    //   return true;
    // }
    if (Math.abs(latitudeOne - latitudeTwo) < comparisonPrecision
      && Math.abs(longitudeOne - longitudeTwo) < comparisonPrecision) {
      return true;
    }
    return false;
  }

  loadPlacePictures(placeId) {
    console.log('load pictureplace for placeId ' + placeId);
    console.log('state', this.state);
    const places = this.state.currentDatePlaces;
    let place = {};
    for (var i = 0; i < places.length; i++) {
      places[i].icon = "Yellow";
      if (places[i].placeId == placeId) {
        place = places[i];
        place.icon = "RedArrow";
      }
    }
    console.log('pictureplace', place);
    this.setState({
      ...this.state,
      currentPlace: place
    });
  }




  renderDateLinks() {
    const trip = this.state.trip;
    console.log(trip);
    const dateLinks = trip.dates.map(date => {
      var dateClassName = 'appear-as-link';
      var isSelected = (this.state.currentDate && date.date == this.state.currentDate.date);
      if (isSelected) {
        dateClassName += ' selectedDate';
      }
      return (
        <td key={date.date} className={dateClassName} onClick={() => this.loadDate(date.date)}>{date.date}</td>
      );
    });
    return (
      <table className='centered'>
        <tbody>
          <tr>
            {dateLinks}
          </tr>
        </tbody>
      </table>
    );
  }

  renderDate() {
    var theDate = '';
    var dateDescription = '';
    var dateMap = '';
    var placePictures = '';
    if (this.state.currentDate) {
      theDate = this.state.currentDate.date;
      dateDescription = this.state.currentDate.description;
      dateMap = <TripMapContainer
        defaultZoomLevel={this.state.currentDate.mapZoomLevel}
        defaultCenterLocation={this.state.currentDate.mapCenter}
        places={this.state.currentDatePlaces}
        onClick={this.loadPlacePictures} />;
    }
    if (this.state.currentPlace) {
      // placePictures = this.state.currentPlace.name;

      var pictures = this.state.currentPlace.pictures;
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
          thumbnailTitle: dateTaken//,
          // description: 'Taken ' + dateTaken
        };
        galleryPictures.push(galleryPicture);
      }
      if (galleryPictures.length > 0) {
        placePictures = <GalleryContainer pictures={galleryPictures} />
      }
      console.log('how many pictures', galleryPictures.length);
    }
    return (
      <table className='table1500 centered'>
        <tbody>
          <tr>
            <td><h2>{theDate}</h2></td>
          </tr>
          <tr>
            <td>{dateMap}</td>
            <td>{placePictures}</td>
          </tr>
          <tr>
            <td className='column600'>{dateDescription}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    const trip = this.state.trip;

    return (
      <div>
        <h2>{trip.name}</h2>
        <span>{trip.description}</span>
        <hr />
        {this.renderDateLinks()}
        {this.renderDate()}
      </div>
    );
  }
}

export default TripByDate;
