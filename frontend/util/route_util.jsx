import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedIn, currentUser }) => (
  <Route
    path={path}
    render={props =>
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={`/user/${currentUser.id}`} />
      )}
  />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route
    path={path}
    render={props =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />}
  />
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser),
  currentUser: state.session.currentUser
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected)
);
