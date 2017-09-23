import { connect } from "react-redux";
import Photos from "./photo";
import { fetchPhotos, postPhoto } from "../../actions/photo_action";

const mapStateToProps = state => ({
  photo: state.photo,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  postPhoto: photo => dispatch(postPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
