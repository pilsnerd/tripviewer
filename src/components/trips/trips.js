import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getTripsByDate } from '../../api/pilsnerdApi';

class Trips extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trips: []
    };

    // this.loadTrips = this.loadTrips.bind(this);
  }

  componentDidMount() {
    // console.log('did mount');
    this.loadTrips();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(`did update ${prevState} --> ${this.state}`);
  }

  loadTrips() {
    getTripsByDate()
      .then(trips => {
        this.setState({
          trips: trips
        })
      });
  }

  render() {
    const trips = this.state.trips.map(trip => {
      const tripPath = `/trips/${trip.tripId}`;
      return (
        <div key={trip.tripId}>
          <Link to={tripPath}>{trip.name}</Link>
        </div>
      );
    });

    return (
      <div>
        <h2>Choose a trip to view</h2>
        {trips}
      </div>
    );
  }

}

export default Trips;
