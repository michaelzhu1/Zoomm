import React from 'react';

class FeedIndexItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-index-item">
        <div className="photo-index-item-desc">
          {this.props.photo.owner}
        </div>
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
