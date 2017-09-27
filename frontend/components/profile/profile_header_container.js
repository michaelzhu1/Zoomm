import ProfileHeader from "./profile_header";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser, updateUser,postFollow,deleteFollow } from "../../actions/profile_action";

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser,
  followers: state.user.followers,
  followings: state.user.followings
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  follow: user => dispatch(postFollow(user)),
  unfollow: user => dispatch(deleteFollow(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)
);
