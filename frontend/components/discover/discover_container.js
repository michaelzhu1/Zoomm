import Discover from "./discover";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  fetchUser,
  postFollow,
  deleteFollow
} from "../../actions/profile_action";
import { fetchPhotos } from "../../actions/photo_action";

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id]),
  followers: state.user.followers,
  followings: state.user.followings,
  loading: state.ui.loading
});

const mapDispatchToProps = dispatch => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  follow: user => dispatch(postFollow(user)),
  unfollow: user => dispatch(deleteFollow(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Discover)
);
