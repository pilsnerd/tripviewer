import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Menu extends Component {
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
                <Link to="/trips">Trips</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Menu;
