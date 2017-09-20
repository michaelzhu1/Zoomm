import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login, signup, logout } from "../../actions/session_action";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    testa: state,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = formType === "login" ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
