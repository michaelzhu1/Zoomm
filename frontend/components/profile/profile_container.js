import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "./profile";
import { fetchUser, updateUser } from "../../actions/profile_action";
import { fetchPhotos, removePhoto } from "../../actions/photo_action";

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id])
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  removePhoto: id => dispatch(removePhoto(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
