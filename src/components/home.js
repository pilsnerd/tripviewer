import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getMenus } from '../api/pilsnerdApi';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: []
    };
  }

  componentDidMount() {
    getMenus()
      .then(menus => {
        this.setState({
          menuItems: menus
        })
      });
  }

  renderMenusWithDescriptions() {
    const menus = this.state.menuItems.map(menuItem => {
      var lastUpdatedText = '';
      if (menuItem.lastUpdated) {
        lastUpdatedText = <span>last updated on {menuItem.lastUpdated}</span>
      }
      return (<div key={menuItem.link}>
        <Link to={menuItem.link}>
          <span>{menuItem.text}</span>
        </Link>
        - <span>{menuItem.description}</span>
        , {lastUpdatedText}
      </div>);
    });
    return menus;
  }

  render() {
    return (
      <div className="leftAligned paddedLeft">
        <h1>Welcome!</h1>
        {this.renderMenusWithDescriptions()}
        <div>
          <p>
            This web site is still a work in progress.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
