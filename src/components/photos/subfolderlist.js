import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SubFolderList extends Component {

  render() {
    const rootPath = this.props.path;

    var subs = <div></div>;

    if (this.props.subfolders && this.props.subfolders.length > 0) {
      const subsList = this.props.subfolders.map(fld => {
        const fldPath = `${rootPath}/${fld}`;
        const linkPath = `/photo?path=${fldPath}`;
        return (
          <div key={fld} className='listItem'>
            <Link to={linkPath}>{fld}</Link>
          </div>
        );
      });
      subs =
        <div>
          <span>choose a folder:</span>
          {subsList}
          <hr />
        </div>;
    }
    return (
      <div>
        {subs}
      </div>
    );
  }
}

export default SubFolderList;
