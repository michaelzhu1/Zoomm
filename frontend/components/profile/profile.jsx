import React from "react";
// import ProfileUpdate from "./profile_update";
import { withRouter } from "react-router-dom";
import ProfileHeaderContainer from "./profile_header_container";
import UserPhotosContainer from "./user_profile_photos_container";

class Profile extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentWillReceiveProps(newProps) {
  //   // debugger
  //   if (this.props.user.id !== parseInt(newProps.match.params.userId)) {
  //     this.props.fetchUser(newProps.match.params.userId);
  //     this.props.fetchUserPhotos(newProps.match.params.userId);
  //   }
  // }

  render() {
    return (
      <div>
        <ProfileHeaderContainer />
        <UserPhotosContainer />
      </div>
    );
  }
}

export default withRouter(Profile);

// add photoindex component
// follower and following info
