// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
// import Profile from "./profile";
// import { fetchUser, updateUser } from "../../actions/profile_action";
// import {
//   fetchPhotos,
//   removePhoto,
//   updatePhoto,
//   fetchUserPhotos
// } from "../../actions/photo_action";
// import { fetchFollows, follow, unfollow } from "../../actions/follow_action";
// //
// // const mapStateToProps = (state, ownProps) => ({
// //   user: state.user,
// //   currentUser: state.session.currentUser,
// //   photos: Object.keys(state.photo).map(id => state.photo[id]),
// //   follows: state.follows
// // });
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   fetchUser: id => dispatch(fetchUser(id)),
//   // updateUser: user => dispatch(updateUser(user)),
//   // fetchPhotos: () => dispatch(fetchPhotos()),
//   // removePhoto: id => dispatch(removePhoto(id)),
//   // updatePhoto: photo => dispatch(updatePhoto(photo)),
//   fetchFollows: () => dispatch(fetchFollows()),
//   // follow: id => dispatch(follow(id)),
//   // unfollow: id => dispatch(unfollow(id)),
//   fetchUserPhotos: id => dispatch(fetchUserPhotos(id))
// });
//
// export default withRouter(
//   connect(null, mapDispatchToProps)(Profile)
// );
