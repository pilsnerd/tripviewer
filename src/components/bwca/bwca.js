import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getBwcaTrips } from '../../api/pilsnerdApi';

class Bwca extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);

    this.loadTrips();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(evt) {
    console.log(evt.key + ' was pressed!');
    // if (evt.key == 'ArrowRight') {
    //   this.selectNextPhoto(1);
    // }
    // if (evt.key == 'ArrowLeft') {
    //   this.selectNextPhoto(-1);
    // }
  }

  loadTrips() {
    this.setState({ loading: true });
    getBwcaTrips()
      .then(trips => {
        this.setState({
          loading: false,
          trips
        })
      });
  }

  render() {
    var tripStuff = <div />;
    if (this.state.trips) {
      tripStuff = this.state.trips.map(trip => {
        const linkPath = `/bwca/${trip.Name}`;
        return (
          <div key={trip.Name}>
            <ul><Link to={linkPath}>{trip.Name}</Link>
              <li>{trip.Description}</li>
              <li>{trip.Caption}</li>
            </ul>
          </div>);
      });
    }

    return (
      <div>
        <h3>Boundary Waters</h3>
        <hr />
        {tripStuff}
        <hr />
      </div>);
  }

}

export default Bwca;
