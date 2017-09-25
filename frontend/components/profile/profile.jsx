import React from "react";
import ProfileUpdate from "./profile_update";
import UserIndexPhotos from "./profile_user_index_photos";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProfileUpdate
          user={this.props.user}
          currentUser={this.props.currentUser}
          fetchUser={this.props.fetchUser}
          updateUser={this.props.updateUser}
        />
        <UserIndexPhotos
          fetchPhotos={this.props.fetchPhotos}
          photos={this.props.photos}
          removePhoto={this.props.removePhoto}
          currentUser={this.props.currentUser}
          updatePhoto={this.props.updatePhoto}
        />
      </div>
    );
  }
}

export default Profile;

// add photoindex component
// follower and following info
