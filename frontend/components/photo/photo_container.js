import { connect } from "react-redux";
import { fetchPhotos, postPhoto } from "../../actions/photo_action";
import UploadButton from "./upload_button";

const mapStateToProps = state => ({
  photo: state.photo,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  postPhoto: photo => dispatch(postPhoto(photo))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadButton);
