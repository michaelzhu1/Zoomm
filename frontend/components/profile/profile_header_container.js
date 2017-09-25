// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import ProfileHeader from "./profile_header";
// import { fetchUser, updateUser } from "../../actions/profile_action";
// import {
//   fetchPhotos,
//   removePhoto,
//   updatePhoto
// } from "../../actions/photo_action";
//
// const mapStateToProps = (state, ownProps) => ({
//   user: state.user,
//   currentUser: state.session.currentUser
// });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   fetchUser: id => dispatch(fetchUser(id)),
//   updateUser: user => dispatch(updateUser(user)),
//   fetchPhotos: () => dispatch(fetchPhotos()),
//   removePhoto: id => dispatch(removePhoto(id)),
//   updatePhoto: photo => dispatch(updatePhoto(photo))
// });
//
// export default withRouter(
//   connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)
// );
