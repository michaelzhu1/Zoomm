import { connect } from "react-redux";
import { follow, unfollow, fetchFollows } from "../../actions/follow_action";
import FeedIndex from "./follow_feed_index";
import {fetchUserFeed} from "../../actions/photo_action";
import {fetchUser} from "../../actions/profile_action";

const mapStateToProps = (state) => ({
  photos: Object.keys(state.photo).map(id => state.photo[id]),
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  fetchUserFeed: () => dispatch(fetchUserFeed()),
  fetchUser:() => dispatch(fetchUser),
  fetchFollows: () => dispatch(fetchFollows()),
  follow: (user) => dispatch(follow(user)),
  unfollow: (user)=> dispatch(unfollow(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedIndex);
