import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import queryString from 'query-string';
import qs from 'qs';
import { getFolders } from '../../api/pilsnerdApi';
// import Auth from '../../auth/auth';
// import LoginLogout from '../../auth/loginlogout';
// import BillList from './billList';
import Breadcrumbs from './breadcrumbs';

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
      path,
      subfolders: [],
      photos: [],
      selectedPhoto: {}
    };

    this.loadFolders = this.loadFolders.bind(this);
    this.selectPhoto = this.selectPhoto.bind(this);
  }

  componentDidMount() {
    // console.log('did mount');
    // this.loadFolders();

    const path = this.getPath();
    this.loadFolders(path);
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
    getFolders(path)
      .then(folder => {

        var i = 1;
        folder.photos.forEach(photo => {
          photo.index = i++;
          photo.thumbPath = `http://www.pilsnerd.com/${this.state.path}/${photo.thumbnailFilename}.${photo.extension}`;
          photo.webPath = `http://www.pilsnerd.com/${this.state.path}/${photo.filename}.${photo.extension}`;
        });

        this.setState({
          subfolders: folder.subfolderNames,
          photos: folder.photos
        })
      });
  }

  selectPhoto(photo) {
    console.log(photo);
    this.setState({
      ...this.state,
      selectedPhoto: photo
    });
  }

  render() {
    const rootPath = this.state.path;
    const pathBits = rootPath.split('/');

    const subs = this.state.subfolders.length === 0
      ? <div>no subfolders</div>
      : this.state.subfolders.map(fld => {
        const fldPath = `${rootPath}/${fld}`;
        const linkPath = `/photo?path=${fldPath}`;
        return (
          <div key={fld}>
            <Link to={linkPath}>{fld}</Link>
          </div>
        );
      });

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
        <Breadcrumbs pathBits={pathBits} />
        <hr />
        {subs}
        <hr />
        <table>
          <tbody>
            <tr>
              <td>
                <div className='thumbnailwindow'>
                  {photos}
                </div>
              </td>
              <td>
                {photoCounter}
                <div className='row600-noscroll'>
                  <img height={580} alt={photoName} title={photoName} src={photoWebPath} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* {photos}
        {this.state.selectedPhoto.filename} */}
        {/* <BillList title="Upcoming bills" bills={this.state.upcomingBills} /> */}
      </div >
    );
  }
}

export default Summary;
