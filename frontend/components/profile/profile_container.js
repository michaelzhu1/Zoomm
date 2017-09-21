import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Profile from "./profile";
import { fetchUser, updateUser } from "../../actions/profile_action";

const mapStateToProps = (state, ownProps) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  updateUser: user => dispatch(updateUser(user))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Profile)
);
