import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserIndexPhotos from "./profile_user_index_photos";
import {
  fetchPhotos,
  removePhoto,
  updatePhoto,
  fetchUserPhotos
} from "../../actions/photo_action";

const mapStateToProps = state => ({
  user: state.user,
  currentUser: state.session.currentUser,
  photos: Object.keys(state.photo).map(id => state.photo[id])
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  removePhoto: id => dispatch(removePhoto(id)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  fetchUserPhotos: id => dispatch(fetchUserPhotos(id))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UserIndexPhotos)
);
