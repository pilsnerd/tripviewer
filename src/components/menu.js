import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import tripsjpg from '../images/trips.jpg';

class Menu extends Component {
  renderMenuItems() {
    const menus = this.props.items.map(menuItem => {
      return (<span key={menuItem.link}>
        <Link to={menuItem.link} className='menuItem'>
          <img alt={menuItem.iconUrl} src={menuItem.iconUrl} />
          <span>{menuItem.text}</span>
        </Link>
      </span>);
    });
    return menus;
  }

  render() {
    return (
      <div style={{ padding: '10px', margin: '10px', background: '#aaaaaa' }}>
        {/* <div style={{ padding: '10px', margin: '10px', background: '#aaaaaa' }}>
        <Link to="/photo">Photos</Link>
        &nbsp;|&nbsp;
        <Link to="/trips">Trips</Link>
        <hr />
      </div> */}
        <table>
          <tbody>
            <tr>
              {/* <td>
                <Link to="/photo">Photos</Link>
              </td> */}
              <td>
                {/* <Link to="/trips">Trips</Link> */}
                {/* {this.renderMenuItem({ link: '/trips', text: 'Trips', iconUrl: tripsjpg })} */}
                {this.renderMenuItems()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Menu;
