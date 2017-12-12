import React from 'react';

class FeedIndexItems extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="image-element-class">
        <div>
          <img src={this.props.photo.photo_url} onClick={this.props.openPhoto(this.props.photo)} />
          <div className="hidden-photo-info">
            <div className="message">
              "{this.props.photo.photo_title}"&nbsp;
              {this.props.photo.age} ago
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default FeedIndexItems;
