import { connect } from "react-redux";
import Photo from "./photo";
import {fetchPhotos, postPhoto} from "../../actions/photo_action";

const mapStateToProps = (state) => ({
  photos: state.photos
});

const mapDispatchToProps = (dispatch) => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  postPhoto: photo => dispatch(postPhoto(photo))
});

export default (
  connect(mapStateToProps, mapDispatchToProps)(Photo)
);
