import React, { Component } from 'react';
import { getBwcaTrips } from '../../api/pilsnerdApi';
import { getFolders } from '../../api/pilsnerdApi';
import Thumbnails from '../photos/thumbnails';
import PhotoDetails from '../photos/photodetails';
import PhotoMap from '../photos/photomap';

class BwcaTrip extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      tripName: props.match.params.id,
      photos: []
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.selectNextPhoto = this.selectNextPhoto.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);

    this.loadTrip(this.state.tripName);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(evt) {
    console.log(evt.key + ' was pressed!');
    if (evt.key == 'ArrowRight') {
      this.selectNextPhoto(1);
    }
    if (evt.key == 'ArrowLeft') {
      this.selectNextPhoto(-1);
    }
  }

  loadTrip() {
    this.setState({ loading: true });
    console.log('looking for trip', this.state.tripName);
    getBwcaTrips()
      .then(trips => {
        var trip = {};
        for (var i = 0; i < trips.length; i++) {
          console.log('trip', trips[i].Name);
          if (trips[i].Name === this.state.tripName) {
            trip = trips[i];
            this.loadTripPictures(trip.Path);
            break;
          }
        }
      });
  }

  loadTripPictures(path) {
    console.log('loadTripPictures', path);
    this.setState({ loading: true });
    getFolders(path)
      .then(folder => {

        var i = 1;
        folder.photos.forEach(photo => {
          photo.index = i++;
          photo.thumbPath = `http://www.pilsnerd.com/${path}/${photo.thumbnailFilename}.${photo.extension}`;
          photo.webPath = `http://www.pilsnerd.com/${path}/${photo.filename}.${photo.extension}`;
          if (photo.fullSizePath) {
            photo.fullSizePaths = [photo.fullSizePath];
          }
        });

        this.setState({
          loading: false,
          folderCaption: folder.caption,
          subfolders: folder.subfolderNames,
          photos: folder.photos,
          selectedPhoto: folder.photos[0]
        })
      });
  }

  selectPhoto(photo) {
    // console.log(photo);
    this.setState({
      ...this.state,
      selectedPhoto: photo
    });
  }

  selectNextPhoto(increment) {
    var currentPhoto = this.state.selectedPhoto;
    if (currentPhoto) {
      var nextIndex = currentPhoto.index - 1 + increment;
      if (this.state.photos.length > nextIndex && nextIndex >= 0) {
        this.selectPhoto(this.state.photos[nextIndex]);
      }
    }
  }

  render() {
    var photoWebPath = '';
    var photoName = '';
    var photoCounter = <span />;
    if (this.state.selectedPhoto && this.state.selectedPhoto.index > 0) {
      photoWebPath = this.state.selectedPhoto.webPath;
      photoName = this.state.selectedPhoto.filename;
      const photoIndex = this.state.selectedPhoto.index;
      const totalPhotos = this.state.photos.length === 0
        ? ''
        : this.state.photos.length;
      photoCounter = <span className='overlay-right'>{`${photoIndex}/${totalPhotos}`}</span>;
    }

    return (
      <div>
        Trip {this.state.tripName}
        <hr />
        <table>
          <tbody>
            <tr>
              <td className="row600">
                <div className='thumbnailwindow'>
                  <Thumbnails photos={this.state.photos} selectedPhoto={this.state.selectedPhoto} selectPhoto={this.selectPhoto} />
                </div>
              </td>
              <td>
                {photoCounter}
                <div className='row600-noscroll col800'>
                  <img height={580} alt={photoName} title={photoName} src={photoWebPath} />
                </div>
              </td>
              <td className='leftAligned paddedLeft'>
                <PhotoDetails selectedPhoto={this.state.selectedPhoto} />
              </td>
              <td>
                <div>
                  <PhotoMap selectedPhoto={this.state.selectedPhoto} showMap={true} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
}

export default BwcaTrip;
