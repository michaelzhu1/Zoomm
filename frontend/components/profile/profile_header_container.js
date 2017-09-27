import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileHeader from "./profile_header";
import { fetchUser, updateUser } from "../../actions/profile_action";
import { fetchFollows, follow, unfollow } from "../../actions/follow_action";

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser,
  follows: state.follows
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  fetchFollows: () => dispatch(fetchFollows()),
  follow: id => dispatch(follow(id)),
  unfollow: id => dispatch(unfollow(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)
);
