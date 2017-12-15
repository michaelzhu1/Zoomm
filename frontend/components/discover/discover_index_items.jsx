import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverIndexItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-index-item">
        <div className="photo-index-item-desc">
          <img src={this.props.photo.owner_avatar} className="user-avatar"></img>
          <Link to={`/user/${this.props.photo.author_id}`} className="photo-own-username">{this.props.photo.owner}
          </Link>
        </div>
        <div>
          <img src={this.props.photo.photo_url} onClick={this.props.openPhoto(this.props.photo)}/>
          <div className="hidden-photo-info">
            <div className="message">
              {this.props.photo.photo_title}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverIndexItems;
