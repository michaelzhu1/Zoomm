import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserIndexPhotos from "./profile_user_index_photos";
import {
  fetchPhotos,
  removePhoto,
  updatePhoto,
  fetchUserPhotos
} from "../../actions/photo_action";
import { fetchUser } from "../../actions/profile_action";

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id])
});

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPhotos: () => dispatch(fetchPhotos()),
  removePhoto: id => dispatch(removePhoto(id)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  fetchUserPhotos: userId => dispatch(fetchUserPhotos(userId))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserIndexPhotos)
);
