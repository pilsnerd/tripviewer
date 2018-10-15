import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import queryString from 'query-string';
import qs from 'qs';
import { getFolders } from '../api/pilsnerdApi';
import Auth from '../auth/auth';
import LoginLogout from '../auth/loginlogout';
// import BillList from './billList';

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
      photos: []
    };

    this.loadFolders = this.loadFolders.bind(this);
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
    console.log(`did update ${prevState.path} --> ${path}`);
    if (this.state.path !== path) {
      this.setState({ path });
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
        this.setState({
          subfolders: folder.subfolderNames,
          photos: folder.photos
        })
      });
  }

  render() {
    const rootPath = this.state.path;
    const pathBits = rootPath.split('/');
    let crumbPath = '/photo?path=';
    const breadcrumbs = pathBits.map(crumb => {
      if (crumb.length > 0) {
        crumbPath += `/${crumb}`;
        return (
          <span>
            {'/'}
            <Link to={crumbPath}>{crumb}</Link>
          </span>
        );
      }
      return (<span />);
    });

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

    const photos = this.state.photos.length === 0
      ? <div>no photos</div>
      : this.state.photos.map(photo => {
        const thumbPath = `http://www.pilsnerd.com/${rootPath}/${photo.thumbnailFilename}.${photo.extension}`;
        return (
          <div key={photo.filename}>
            <img src={thumbPath} alt={photo.filename} />
            {/* {photo.filename} */}
          </div>
        );
      });

    return (
      <div>
        <LoginLogout auth={new Auth()} />
        < p />
        {breadcrumbs}
        < p />
        {subs}
        < p />
        {photos}
        {/* <BillList title="Upcoming bills" bills={this.state.upcomingBills} /> */}
      </div >
    );
  }
}

export default Summary;
