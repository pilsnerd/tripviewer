import React, { Component } from 'react';

class PhotoDetails extends Component {

  render() {
    var fullSizePathLinks = [];

    if (this.props.selectedPhoto && this.props.selectedPhoto.fullSizePaths) {
      fullSizePathLinks.push(<span key='label'>Full-size photo possibilities:<br /></span>);
      this.props.selectedPhoto.fullSizePaths.forEach(path => {
        fullSizePathLinks.push(<span key={path}><a href={path} target='blank'>{path}</a><br /></span>);
      })
    }
    else {
      fullSizePathLinks.push(<span key='find'><a className='appear-as-link' onClick={() => { this.findFullSizePaths(this.props.selectedPhoto); }}>Find full size photo</a></span>);
    }

    var people = '';
    if (this.props.selectedPhoto && this.props.selectedPhoto.people) {
      people = '|';
      this.props.selectedPhoto.people.forEach(person => {
        people += ' ' + person + ' |';
      })
    }

    var dateTaken = '';
    var caption = '';
    var description = '';
    var location = '';
    if (this.props.selectedPhoto) {
      if (this.props.selectedPhoto.dateTaken !== '1/1/2000') {
        dateTaken = `taken on ${this.props.selectedPhoto.dateTaken}`;
      }
      caption = this.props.selectedPhoto.caption;
      description = this.props.selectedPhoto.description;
      if (this.props.selectedPhoto.location !== '0, 0') {
        location = `location: ${this.props.selectedPhoto.location}`;
      }
    }

    const details =
      <div>
        {caption}<br />
        {description}<br />
        {dateTaken}<br />
        {location}<p />
        {people === '|' ? <span /> : people}<p />
        {fullSizePathLinks}
      </div>;

    return (
      <div>
        {details}
      </div>
    );
  }
}

export default PhotoDetails;
