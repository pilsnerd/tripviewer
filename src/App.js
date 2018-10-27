import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import MapTest from './components/maptest';
import Summary from './components/photos/summary';
import Trips from './components/trips/trips';
// import Trip from './components/trip';
import TripByDate from './components/trips/tripbydate';
import tripsjpg from './images/trips.jpg';
// import LoginLogout from './auth/loginlogout';
// import Auth from './auth/auth';

//TODO: i couldn't get either of these packages to work:
//(these used to be in the devDependencies section of package.json)
// "react-native-thumbnail-video": "0.0.8",
// "react-video-thumbnail": "^0.1.3"

// import VideoThumbnail from 'react-video-thumbnail';
// import Thumbnail from 'react-native-thumbnail-video';

// const auth = new Auth();
// auth.login();

class App extends Component {
  render() {
    const menuItems = [
      { link: '/photo', text: 'Photos' },
      { link: '/trips', text: 'Trips', iconUrl: tripsjpg },
      { link: '/maptest', text: 'Map Test' }
    ];
  
      return (
      <Router>
        <div className="App">
          <script type="text/javascript" src="node_modules/auth0-js/build/auth0.js"></script>
          {/* <LoginLogout auth={new Auth()} /> */}

          {/* <ul>
            <li><Link to="/photo">Summary</Link></li>
            <li><Link to="/photo?path=/EasyPics/2018">2018</Link></li>
          </ul> */}

          <Menu items={menuItems} />

          <Route exact path="/" component={Home} />
          <Route path="/maptest" component={MapTest} />
          <Route path="/photo" component={Summary} />
          <Route path="/trips/" exact component={Trips} />
          <Route path="/trips/:id" component={TripByDate} />
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
          {/* <p className="App-intro">
        </p> */}
          {/* <VideoThumbnail
          videoUrl="http://localhost/bwca/2015/06570001.MOV"
          cors={true}
          thumbnailHandler={(thumbnail) => console.log(thumbnail)}
          width={120}
          height={80}
        /> */}
          {/* <Thumbnail url="http://localhost/EasyPics/2015/20150108/IMG_1258.mp4" /> */}
          {/* <video id="video2" src="http://localhost/bwca/2015/06570001.MOV" type="video/mp4" controls style={{visibility:'hidden'}}></video><br/> */}

          {/* <Summary /> */}

        </div>
      </Router>
    );
  }
}

export default App;
