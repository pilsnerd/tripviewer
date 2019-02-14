import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import qs from 'qs';
import { getFolders, getFullSizeFolders } from '../../api/pilsnerdApi';
// import Auth from '../../auth/auth';
// import LoginLogout from '../../auth/loginlogout';
// import BillList from './billList';
import Breadcrumbs from './breadcrumbs';
import SubFolderList from './subfolderlist';
import waitgif from '../../images/wait.gif';

// NOTE about query-string vs qs: the query-string library would not compile when
//    trying to perform "npm run build" so the best recommendation I found was to
//    use the "qs" library instead.
//  The old package.json import (instead of "qs") was:    "query-string": "^6.1.0",

class Summary extends Component {
  constructor(props) {
    super(props);

    // console.log(this.props.location);
    // // check out https://tylermcginnis.com/react-router-query-strings/
    // const values = queryString.parse(this.props.location.search);
    // console.log(values.path);

    // let path = '/EasyPics';//'/EasyPics/2017/20170429'
    // if (values.path) {
    //   path = values.path;
    // }
    const path = this.getPath();

    this.state = {
      loading: true,
      path,
      subfolders: [],
      photos: [],
      selectedPhoto: {}
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.loadFolders = this.loadFolders.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
    this.selectNextPhoto = this.selectNextPhoto.bind(this);
    this.findFullSizePaths = this.findFullSizePaths.bind(this);
  }

  componentDidMount() {
    // console.log('did mount');
    // this.loadFolders();

    document.addEventListener('keydown', this.handleKeyDown);

    const path = this.getPath();
    this.loadFolders(path);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`did update ${prevState.path} --> ${this.state.path}`);
    // const values = queryString.parse(this.props.location.search);
    // console.log(values.path);
    const path = this.getPath();
    // console.log(`did update ${prevState.path} --> ${path}`);
    if (this.state.path !== path) {
      this.setState({ path, selectedPhoto: null });
      this.loadFolders(path);
    }
    // this.loadFolders();
    // let path = '/EasyPics';//'/EasyPics/2017/20170429'
    // if (values.path) {
    //   path = values.path;
    // }
    // this.state = {
    //   path,
    //   subfolders: [],
    //   photos: []
    // };
  }

  handleKeyDown(evt) {
    // console.log(evt.key + ' was pressed!');
    if (evt.key == 'ArrowRight') {
      this.selectNextPhoto(1);
    }
    if (evt.key == 'ArrowLeft') {
      this.selectNextPhoto(-1);
    }
  }

  getPath() {
    // const values = queryString.parse(this.props.location.search);
    const values = qs.parse(this.props.location.search.slice(1));
    let path = '/EasyPics';//'/EasyPics/2017/20170429'
    if (values.path) {
      path = values.path;
    }
    return path;
  }

  loadFolders(path) {
    this.setState({ loading: true });
    getFolders(path)
      .then(folder => {

        var i = 1;
        folder.photos.forEach(photo => {
          photo.index = i++;
          photo.thumbPath = `http://www.pilsnerd.com/${this.state.path}/${photo.thumbnailFilename}.${photo.extension}`;
          photo.webPath = `http://www.pilsnerd.com/${this.state.path}/${photo.filename}.${photo.extension}`;
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

  findFullSizePaths(photo) {
    if (!photo.fullSizePaths) {
      getFullSizeFolders(photo.filename, photo.extension)
        .then(folders => {
          var fullSizePaths = [];
          folders.forEach(folder => {
            var path = folder.fullSizePath;
            path = path.replace("\\\\charon\\Public\\Photos", "/FullSizePics");
            path = path.replace(/\\/g, "/");
            var fullSizePath = `http://www.pilsnerd.com${path}/${folder.fullSizeFilename}.${folder.fullSizeExtension}`;
            fullSizePaths.push(fullSizePath);
            // console.log(fullSizePath);
          });
          photo.fullSizePaths = fullSizePaths;
          this.setState({
            ...this.state,
            selectedPhoto: photo
          });
        });
    }

  }

  render() {
    const rootPath = this.state.path;
    const pathBits = rootPath.split('/');

    var photoWebPath = '';
    var photoName = '';
    var photoCounter = <span />;
    var photoDetails = '';
    var fullSizePathLinks = [];
    if (this.state.selectedPhoto && this.state.selectedPhoto.index > 0) {
      photoWebPath = this.state.selectedPhoto.webPath;
      photoName = this.state.selectedPhoto.filename;
      const photoIndex = this.state.selectedPhoto.index;
      const totalPhotos = this.state.photos.length === 0
        ? ''
        : this.state.photos.length;
      photoCounter = <span className='overlay-right'>{`${photoIndex}/${totalPhotos}`}</span>;
      if (this.state.selectedPhoto.fullSizePaths) {
        fullSizePathLinks.push(<span key='label'>Full-size photo possibilities:<br /></span>);
        this.state.selectedPhoto.fullSizePaths.forEach(path => {
          fullSizePathLinks.push(<span key={path}><a href={path} target='blank'>{path}</a><br /></span>);
        })
      }
      else {
        fullSizePathLinks.push(<span key='find'><a className='appear-as-link' onClick={() => { this.findFullSizePaths(this.state.selectedPhoto); }}>Find full size photo</a></span>);
      }
      var people = '';
      if (this.state.selectedPhoto.people) {
        people = '|';
        this.state.selectedPhoto.people.forEach(person => {
          people += ' ' + person + ' |';
        })
      }
      photoDetails =
        <div>
          {this.state.selectedPhoto.dateTaken === '1/1/2000' ? <span /> : this.state.selectedPhoto.dateTaken}<br />
          {this.state.selectedPhoto.caption}<br />
          {this.state.selectedPhoto.description}<br />
          {this.state.selectedPhoto.location === '0, 0' ? <span /> : this.state.selectedPhoto.location}<p />
          {people === '|' ? <span /> : people}<br />
          {fullSizePathLinks}
        </div>;
    }

    const photos = this.state.photos.length === 0
      ? <div>no photos</div>
      : this.state.photos.map(photo => {
        var cls = 'unselectedPhoto';
        if (this.state.selectedPhoto && this.state.selectedPhoto.index > 0 && photo.index === this.state.selectedPhoto.index) {
          cls = 'selectedPhoto';
        }
        return (
          <div key={photo.filename}>
            <img
              src={photo.thumbPath}
              alt={photo.filename}
              title={photo.filename}
              onClick={() => this.selectPhoto(photo)}
              className={cls} />
            {/* {photo.filename} */}
          </div>
        );
      });

    return (
      <div>
        {/* <LoginLogout auth={new Auth()} />
        < p /> */}
        <div className='leftAligned paddedLeft'>
          <span>current folder:</span>
          <Breadcrumbs pathBits={pathBits} />
        </div>
        <p>{this.state.folderCaption}</p>
        <hr />
        <div className='listHeader leftAligned paddedLeft'>
          <SubFolderList path={rootPath} subfolders={this.state.subfolders} />
        </div>
        <table>
          <tbody>
            <tr>
              <td className="row600">
                <div className='thumbnailwindow'>
                  {photos}
                </div>
              </td>
              <td>
                {photoCounter}
                <div className='row600-noscroll max500'>
                  <img height={580} alt={photoName} title={photoName} src={photoWebPath} />
                </div>
              </td>
              <td className='leftAligned paddedLeft'>
                {photoDetails}
              </td>
            </tr>
          </tbody>
        </table>
        {/* {fullSizePathLinks} */}
        {/* {photos}
        {this.state.selectedPhoto.filename} */}
        {/* <BillList title="Upcoming bills" bills={this.state.upcomingBills} /> */}
        {this.state.loading && <img src={waitgif} />}
      </div >
    );
  }
}

export default Summary;
