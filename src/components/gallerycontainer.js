import React from "react";
import ImageGallery from 'react-image-gallery';

export default class GalleryContainer extends React.Component {

  componentWillReceiveProps(){
    this.refs.gallery.slideToIndex(0);
  }

  render() {
    return (
      <div style={{width:"50%"}}>
        <ImageGallery ref="gallery" items={this.props.pictures} infinite={false} thumbnailPosition={'left'} lazyLoad={true} showPlayButton={false} showBullets={true} showIndex={true} />
      </div>
    );
  }
}
