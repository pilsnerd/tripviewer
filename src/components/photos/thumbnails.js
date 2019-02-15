import React, { Component } from 'react';

class Thumbnails extends Component {

  render() {
    const thumbnails = this.props.photos.length === 0
      ? <div>no photos</div>
      : this.props.photos.map(photo => {
        var cls = 'unselectedPhoto';
        if (this.props.selectedPhoto && this.props.selectedPhoto.index > 0 && photo.index === this.props.selectedPhoto.index) {
          cls = 'selectedPhoto';
        }
        return (
          <div key={photo.filename}>
            <img
              src={photo.thumbPath}
              alt={photo.filename}
              title={photo.filename}
              onClick={() => this.props.selectPhoto(photo)}
              className={cls} />
            {/* {photo.filename} */}
          </div>
        );
      });

    return (
      <div>
        {thumbnails}
      </div>
    );
  }
}

export default Thumbnails;
