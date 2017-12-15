import React from "react";

class ProfileIndexItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="photo-index-item">
        <div>
          <img
            src={this.props.photo.photo_url}
            onClick={this.props.openPhoto(this.props.photo)}
          />
          <div className="hidden-photo-info">
            <div className="message">{this.props.photo.photo_title}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileIndexItems;
