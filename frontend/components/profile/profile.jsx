import React from "react";
import ProfileUpdate from "./profile_update";
import UserIndexPhotos from "./profile_user_index_photos";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(newProps) {
    // debugger
    if (this.props.user.id !== parseInt(newProps.match.params.userId)) {
      this.props.fetchUser(this.props.match.params.userId);
      this.props.fetchFollows();
      this.props.fetchUserPhotos(this.props.match.params.userId);
    }
  }

  render() {
    return (
      <div>
        <ProfileUpdate
          user={this.props.user}
          currentUser={this.props.currentUser}
          follows={this.props.follows}
          fetchUser={this.props.fetchUser}
          updateUser={this.props.updateUser}
          fetchFollows={this.props.fetchFollows}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
        <UserIndexPhotos
          user={this.props.user}
          currentUser={this.props.currentUser}
          photos={this.props.photos}
          fetchPhotos={this.props.fetchPhotos}
          removePhoto={this.props.removePhoto}
          updatePhoto={this.props.updatePhoto}
          fetchUserPhotos={this.props.fetchUserPhotos}
        />
      </div>
    );
  }
}

export default Profile;

// add photoindex component
// follower and following info
