import { connect } from "react-redux";
import FeedIndex from "./follow_feed_index";
import {fetchUserFeed} from "../../actions/photo_action";
import {fetchUser, postFollow,deleteFollow} from "../../actions/profile_action";

const mapStateToProps = (state) => ({
  photos: Object.keys(state.photo).map(id => state.photo[id]),
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserFeed: () => dispatch(fetchUserFeed()),
  fetchUser:() => dispatch(fetchUser),
  follow: (user) => dispatch(postFollow(user)),
  unfollow: (user)=> dispatch(deleteFollow(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
