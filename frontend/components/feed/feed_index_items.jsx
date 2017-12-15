import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndexItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-index-item">
        <div className="photo-index-item-desc">
          <Link to={`/user/${this.props.photo.author_id}`} className="photo-own-username">{this.props.photo.owner}</Link>&nbsp;
          {this.props.photo.age} ago
        </div>
        <div>

          <img src={this.props.photo.photo_url} onClick={this.props.openPhoto(this.props.photo)} />
          <div className="hidden-photo-info">
            <div className="message">
              <p>{this.props.photo.photo_title}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedIndexItems;
