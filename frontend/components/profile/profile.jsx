import React from "react";
import ProfileUpdate from "./profile_update";

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProfileUpdate user={this.props.user} currentUser={this.props.currentUser} fetchUser={this.props.fetchUser}
        updateUser={this.props.updateUser}/>
    );
  }

}

export default Profile;

// add photoindex component
// follower and following info 
