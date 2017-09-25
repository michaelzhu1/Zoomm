import { connect } from "react-redux";
import SessionForm from "./session_form";
import {
  login,
  signup,
  logout,
  clearErrors
} from "../../actions/session_action";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === "login" ? login : signup;
  return {
    loginGuest: user => dispatch(login(user)),
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
