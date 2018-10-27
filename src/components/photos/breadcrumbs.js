import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {

  render() {
    var crumbPath = '/photo?path=';
    const crumbs = this.props.pathBits.map(crumb => {
      if (crumb.length > 0) {
        crumbPath += `/${crumb}`;
        return (
          <span key={crumbPath}>
            {'/'}
            <Link key={crumbPath} to={crumbPath}>{crumb}</Link>
          </span>
        );
      }
      return (<span key={crumb} />);
    });
    return <span>{crumbs}</span>;
  }
}

export default Breadcrumbs;
